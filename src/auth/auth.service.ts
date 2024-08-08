import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { httpExceptionHandler } from 'src/helper/errorhelper';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}
  async signUp(signUpRequest: SignUpAuthDto) {
    const { confirmPassword, username, password, roleId, empId } =
      signUpRequest;

    const userNameExists = await this.prisma.login.findFirst({
      where: { username: username },
    });
    if (userNameExists) {
      httpExceptionHandler('Username exists', HttpStatus.BAD_REQUEST);
    }
    if (confirmPassword !== password) {
      httpExceptionHandler('Passwords do not match', HttpStatus.BAD_REQUEST);
    }

    if (roleId === undefined) {
      httpExceptionHandler('RoleId cannot be empty', HttpStatus.BAD_REQUEST);
    }

    const employeeExists = await this.prisma.employee.findUnique({
      where: {
        empId: empId,
      },
    });

    if (!employeeExists)
      httpExceptionHandler('Employee does not exists', HttpStatus.NOT_FOUND);

    const roleExists = await this.prisma.roles.findFirst({
      where: { id: roleId },
    });

    if (!roleExists) {
      httpExceptionHandler('Role does not exists', HttpStatus.NOT_FOUND);
    }
    const hashedPassword = await argon.hash(password);
    const loginDetails = await this.prisma.login.create({
      data: {
        username: username,
        password: hashedPassword,
        roleId: roleId,
        employeeId: empId,
        active: true,
      },
    });
    delete loginDetails.password;
    return { ...loginDetails };
  }

  async login(dto: { username: string; password: string }) {
    const { username, password } = dto;
    const loginDetails = await this.prisma.login.findFirst({
      where: {
        username: username,
        active: true,
      },
      include: {
        role: true,
      },
    });

    if (!loginDetails) throw new ForbiddenException('Incorrect credentials');
    const passwordVerify = await argon.verify(loginDetails.password, password);
    if (!passwordVerify) {
      httpExceptionHandler('Incorrect Credentials', HttpStatus.FORBIDDEN);
    }

    const allRoles = await this.prisma.roles.findFirst({
      where: {
        id: loginDetails.roleId,
      },
      include: {
        route: true,
      },
    });
    const allRoutes = allRoles.route.map((x) => x.routes);

    const token = await this.signedToken(
      loginDetails.id,
      loginDetails.username,
      allRoutes,
      loginDetails.role.role,
    );
    return { access_token: token };
  }

  signedToken(
    userId: number,
    username: string,
    routes: string[],
    role: string,
  ) {
    const payload = {
      sub: userId,
      username,
      routes,
      role,
    };
    return this.jwt.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '15m',
    });
  }
}

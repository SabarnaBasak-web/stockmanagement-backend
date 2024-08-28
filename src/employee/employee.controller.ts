import {
  Body,
  Controller,
  Post,
  Put,
  UseGuards,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/auth-guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { EmployeeService } from './employee.service';
import {
  AddEmployeeDto,
  EmployeeResponseDto,
  EmployeesResponseDto,
  UpdateEmployeeDto,
} from './dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { RoleEnum } from 'src/enums/role.enum';
import { GetUser } from 'src/auth/decorator';
import { PaginationQueryFilter } from 'src/assigned-products/dto';

@UseGuards(JwtGuard, RoleGuard)
@Controller('employee')
@ApiTags('Employee')
@ApiSecurity('JWT-auth')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Roles(RoleEnum.SUPERADMIN)
  @Post()
  @ApiCreatedResponse({
    description: 'Employee Created',
    type: EmployeeResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Incorrect Ip' })
  addEmployee(@Body() employeeDto: AddEmployeeDto) {
    return this.employeeService.createEmployee(employeeDto);
  }

  @Get('/loggedUser')
  getLoggedInUserDetails(@GetUser('id') userId: number) {
    return this.employeeService.getLoggedInEmployeeDetailsById(userId);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Employee Details',
    type: EmployeeResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Incorrect Employee Id' })
  fetchEmployeeDetails(@Param('id', ParseIntPipe) userId: number) {
    return this.employeeService.getEmployeeDetailsById(userId);
  }

  @Get('/empId/:id')
  @ApiOkResponse({
    description: 'Details of employee by employee id',
    type: EmployeeResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Incorrect Employee Id' })
  fetchEmployeeDetailsByEmployeeId(@Param('id') empId: string) {
    return this.employeeService.getEmployeeDetailsByEmployeeId(empId);
  }

  @Roles(RoleEnum.SUPERADMIN)
  @Get()
  @ApiOkResponse({
    description: 'All Employee Details',
    type: EmployeesResponseDto,
  })
  fetchAllEmployee(@Query() paginationQuery: PaginationQueryFilter) {
    return this.employeeService.getAllEmployees(paginationQuery);
  }

  @Roles(RoleEnum.SUPERADMIN)
  @Put(':id')
  @ApiOkResponse({
    description: 'Update employee details',
    type: EmployeeResponseDto,
  })
  updateExistingEmployee(
    @Body() existingEmployeePayload: UpdateEmployeeDto,
    @Param('id', ParseIntPipe) empId: number,
  ) {
    return this.employeeService.updateEmployeeDetails(
      existingEmployeePayload,
      empId,
    );
  }
}

/* eslint-disable */
export default async () => {
  const t = {
    ['./ip/dto/IpResponse.dto']: await import('./ip/dto/IpResponse.dto'),
    ['./employee/dto/EmployeeResponse.dto']: await import(
      './employee/dto/EmployeeResponse.dto'
    ),
    ['./routes/dto/routes.dto']: await import('./routes/dto/routes.dto'),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./auth/dto/auth.dto'),
          {
            AuthDto: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
            SignUpAuthDto: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
              confirmPassword: { required: true, type: () => String },
              roleId: { required: true, type: () => Number },
            },
            SignUpResponseDto: {
              id: { required: true, type: () => Number },
              username: { required: true, type: () => String },
              imagePath: { required: true, type: () => String },
              roleId: { required: true, type: () => Number },
            },
            loginResponseDto: {
              access_token: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./ip/dto/addIp.dto'),
          {
            AddIpDto: {
              ipNumber: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              inUse: { required: true, type: () => Boolean },
            },
          },
        ],
        [
          import('./employee/dto/AddEmployee.dto'),
          {
            AddEmployeeDto: {
              name: { required: true, type: () => String },
              designation: { required: true, type: () => String },
              cell: { required: true, type: () => String },
              floorNumber: { required: true, type: () => String },
              mobileNumber: { required: true, type: () => String },
              empId: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              IpId: { required: false, type: () => Number },
            },
          },
        ],
        [
          import('./employee/dto/EmployeeResponse.dto'),
          {
            EmployeeResponseDto: {
              name: { required: true, type: () => String },
              designation: { required: true, type: () => String },
              cell: { required: true, type: () => String },
              floorNumber: { required: true, type: () => String },
              mobileNumber: { required: true, type: () => String },
              empId: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              IpId: { required: true, type: () => Number },
              Ip: {
                required: true,
                type: () => t['./ip/dto/IpResponse.dto'].IpResponseDto,
              },
            },
          },
        ],
        [
          import('./ip/dto/IpResponse.dto'),
          {
            IpResponseDto: {
              id: { required: true, type: () => String },
              ipNumber: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              inUse: { required: true, type: () => Boolean },
            },
            IpAssignedResponseDto: {
              id: { required: true, type: () => String },
              ipNumber: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              inUse: { required: true, type: () => Boolean },
            },
            IpWithEmployeeResponseDto: {
              id: { required: true, type: () => String },
              ipNumber: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
              inUse: { required: true, type: () => Boolean },
              Employee: {
                required: true,
                type: () => [
                  t['./employee/dto/EmployeeResponse.dto'].EmployeeResponseDto,
                ],
              },
            },
          },
        ],
        [
          import('./ip/dto/updateIp.dto'),
          {
            UpdateIpDto: { employeeId: { required: true, type: () => Number } },
          },
        ],
        [
          import('./product/dto/AddProduct.dto'),
          {
            AddProductDto: {
              name: { required: true, type: () => String },
              active: { required: true, type: () => Boolean },
            },
          },
        ],
        [
          import('./routes/dto/routes.dto'),
          {
            CreateRouteDto: { name: { required: true, type: () => String } },
            GetRouteResponseDto: {
              id: { required: true, type: () => Number },
              name: { required: true, type: () => String },
            },
            GetRoutesByRoleResponseDto: {
              id: { required: true, type: () => Number },
              roleName: { required: true, type: () => String },
              route: {
                required: true,
                type: () => [t['./routes/dto/routes.dto'].GetRouteResponseDto],
              },
            },
          },
        ],
        [
          import('./roles/dto/createRole.dto'),
          {
            CreateRoleDto: {
              name: { required: true, type: () => String },
              routes: { required: true, type: () => String },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./auth/auth.controller'),
          { AuthController: { signUp: {}, login: {} } },
        ],
        [
          import('./ip/ip.controller'),
          {
            IpController: {
              addIp: {},
              assignIpToEmployee: {},
              getAllIps: { type: [Object] },
              getIpDetailsById: {},
              updateIdNumber: {},
            },
          },
        ],
        [
          import('./product/product.controller'),
          { ProductController: { addProduct: {}, fetchAllProducts: {} } },
        ],
        [
          import('./routes/routes.controller'),
          {
            RoutesController: { createRoute: {}, getRoute: { type: [Object] } },
          },
        ],
        [
          import('./roles/roles.controller'),
          {
            RolesController: {
              createRole: { type: Object },
              getAllRoles: { type: [Object] },
            },
          },
        ],
        [
          import('./employee/employee.controller'),
          {
            EmployeeController: {
              addEmployee: { type: Object },
              fetchAllEmployee: { type: [Object] },
              fetchEmployeeDetails: { type: Object },
            },
          },
        ],
      ],
    },
  };
};

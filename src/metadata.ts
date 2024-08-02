/* eslint-disable */
export default async () => {
    const t = {
        ["./ip/dto/IpResponse.dto"]: await import("./ip/dto/IpResponse.dto"),
        ["./employee/dto/EmployeeResponse.dto"]: await import("./employee/dto/EmployeeResponse.dto"),
        ["./routes/dto/routes.dto"]: await import("./routes/dto/routes.dto"),
        ["./assigned-products/dto/AssignedProductResponse.dto"]: await import("./assigned-products/dto/AssignedProductResponse.dto"),
        ["./ups/dto/UpsCreatedResponse.dto"]: await import("./ups/dto/UpsCreatedResponse.dto"),
        ["./vendor/dto/CreatedVendorResponse.dto"]: await import("./vendor/dto/CreatedVendorResponse.dto"),
        ["./monitor/dto/CreatedMonitorResponse.dto"]: await import("./monitor/dto/CreatedMonitorResponse.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./auth/dto/auth.dto"), { "AuthDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } }, "SignUpAuthDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String }, confirmPassword: { required: true, type: () => String }, roleId: { required: true, type: () => Number } }, "SignUpResponseDto": { id: { required: true, type: () => Number }, username: { required: true, type: () => String }, imagePath: { required: true, type: () => String }, roleId: { required: true, type: () => Number } }, "loginResponseDto": { access_token: { required: true, type: () => String } } }], [import("./ip/dto/addIp.dto"), { "AddIpDto": { ipNumber: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, inUse: { required: true, type: () => Boolean } } }], [import("./employee/dto/AddEmployee.dto"), { "AddEmployeeDto": { name: { required: true, type: () => String }, designation: { required: true, type: () => String }, cell: { required: true, type: () => String }, floorNumber: { required: true, type: () => String }, mobileNumber: { required: true, type: () => String }, empId: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, IpId: { required: false, type: () => Number } } }], [import("./employee/dto/EmployeeResponse.dto"), { "EmployeeResponseDto": { name: { required: true, type: () => String }, designation: { required: true, type: () => String }, cell: { required: true, type: () => String }, floorNumber: { required: true, type: () => String }, mobileNumber: { required: true, type: () => String }, empId: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, IpId: { required: true, type: () => Number }, Ip: { required: true, type: () => t["./ip/dto/IpResponse.dto"].IpResponseDto } } }], [import("./ip/dto/IpResponse.dto"), { "IpResponseDto": { id: { required: true, type: () => String }, ipNumber: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, inUse: { required: true, type: () => Boolean } }, "IpAssignedResponseDto": { id: { required: true, type: () => String }, ipNumber: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, inUse: { required: true, type: () => Boolean } }, "IpWithEmployeeResponseDto": { id: { required: true, type: () => String }, ipNumber: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, inUse: { required: true, type: () => Boolean }, Employee: { required: true, type: () => [t["./employee/dto/EmployeeResponse.dto"].EmployeeResponseDto] } } }], [import("./ip/dto/updateIp.dto"), { "UpdateIpDto": { employeeId: { required: true, type: () => Number } } }], [import("./product/dto/AddProduct.dto"), { "AddProductDto": { name: { required: true, type: () => String }, active: { required: true, type: () => Boolean } } }], [import("./routes/dto/routes.dto"), { "CreateRouteDto": { name: { required: true, type: () => String } }, "GetRouteResponseDto": { id: { required: true, type: () => Number }, name: { required: true, type: () => String } }, "GetRoutesByRoleResponseDto": { id: { required: true, type: () => Number }, roleName: { required: true, type: () => String }, route: { required: true, type: () => [t["./routes/dto/routes.dto"].GetRouteResponseDto] } } }], [import("./roles/dto/createRole.dto"), { "CreateRoleDto": { name: { required: true, type: () => String }, routes: { required: true, type: () => String } } }], [import("./assigned-products/dto/AssignProduct.dto"), { "AssignProductDto": { ipId: { required: true, type: () => Number }, empId: { required: true, type: () => String }, productId: { required: true, type: () => Number }, serialNo: { required: true, type: () => String } } }], [import("./assigned-products/dto/PaginationQuery.dto"), { "PaginationQueryFilter": { count: { required: true, type: () => Number }, cursor: { required: true, type: () => Number } } }], [import("./assigned-products/dto/AssignedProductWithEmployeeResponse.dto"), { "AssignedProductWithEmployeeDetailsResponseDto": { id: { required: true, type: () => Number }, ipId: { required: true, type: () => Number }, empId: { required: true, type: () => String }, productId: { required: true, type: () => Number }, serialNo: { required: true, type: () => String }, dateOfIssue: { required: true, type: () => Date }, dateOfReturn: { required: true, type: () => Date }, employee: { required: true, type: () => t["./employee/dto/EmployeeResponse.dto"].EmployeeResponseDto } } }], [import("./assigned-products/dto/AssignedProductResponse.dto"), { "AssignedProductResponseDto": { id: { required: true, type: () => Number }, ipId: { required: true, type: () => Number }, empId: { required: true, type: () => String }, productId: { required: true, type: () => Number }, serialNo: { required: true, type: () => String }, dateOfIssue: { required: true, type: () => Date }, dateOfReturn: { required: true, type: () => Date } } }], [import("./ups/dto/UpdateUpsPayload.dto"), { "UpdateUpsPayload": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date } } }], [import("./ups/dto/UpsCreatedResponse.dto"), { "UpsCreatedResponse": { id: { required: true, type: () => Number }, gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number } } }], [import("./ups/dto/AddUpsPayload.dto"), { "AddUpsPayload": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number } } }], [import("./vendor/dto/UpdateVendorDetails.dto"), { "UpdateVendorDetailsPayload": { name: { required: true, type: () => String }, mobile: { required: true, type: () => String }, address: { required: true, type: () => String } } }], [import("./vendor/dto/CreatedVendorResponse.dto"), { "CreatedVendorResponse": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, mobile: { required: true, type: () => String }, address: { required: true, type: () => String }, dateOfRegistry: { required: true, type: () => Date } } }], [import("./vendor/dto/CreateVendorPayload.dto"), { "CreateVendorPayload": { name: { required: true, type: () => String }, mobile: { required: true, type: () => String }, address: { required: true, type: () => String }, dateOfRegistry: { required: true, type: () => String } } }], [import("./monitor/dto/CreateMonitorPayload.dto"), { "CreateMonitor": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number }, displaySize: { required: true, type: () => String } }, "CreateMonitorRequest": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number }, displaySize: { required: true, type: () => String } } }], [import("./monitor/dto/CreatedMonitorResponse.dto"), { "CreateMonitor": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number }, displaySize: { required: true, type: () => String } }, "CreatedMonitorResponse": { gemNo: { required: true, type: () => Number }, gemDate: { required: true, type: () => Date }, brandName: { required: true, type: () => String }, serialNo: { required: true, type: () => String }, modelNo: { required: true, type: () => String }, problem: { required: true, type: () => String }, warrentyStartDate: { required: true, type: () => Date }, warrentyEndDate: { required: true, type: () => Date }, defunct: { required: true, type: () => Boolean }, isAmc: { required: true, type: () => Boolean }, eWaste: { required: true, type: () => Boolean }, deliveryDate: { required: true, type: () => Date }, vendorId: { required: true, type: () => Number }, displaySize: { required: true, type: () => String } } }]], "controllers": [[import("./auth/auth.controller"), { "AuthController": { "signUp": {}, "login": {} } }], [import("./ip/ip.controller"), { "IpController": { "addIp": {}, "assignIpToEmployee": {}, "getAllIps": { type: [Object] }, "getIpDetailsById": {}, "updateIdNumber": {} } }], [import("./product/product.controller"), { "ProductController": { "addProduct": {}, "fetchAllProducts": {} } }], [import("./routes/routes.controller"), { "RoutesController": { "createRoute": {}, "getRoute": { type: [Object] } } }], [import("./roles/roles.controller"), { "RolesController": { "createRole": { type: Object }, "getAllRoles": { type: [Object] } } }], [import("./employee/employee.controller"), { "EmployeeController": { "addEmployee": { type: Object }, "fetchAllEmployee": { type: [Object] }, "fetchEmployeeDetails": { type: Object } } }], [import("./assigned-products/assigned-products.controller"), { "AssignedProductsController": { "assignProduct": { type: t["./assigned-products/dto/AssignedProductResponse.dto"].AssignedProductResponseDto }, "getAllAssignedProducts": { type: [Object] }, "searchAssignedProduct": { type: Object } } }], [import("./ups/ups.controller"), { "UpsController": { "addUps": { type: t["./ups/dto/UpsCreatedResponse.dto"].UpsCreatedResponse }, "getAllUpsList": { type: [t["./ups/dto/UpsCreatedResponse.dto"].UpsCreatedResponse] }, "updateUpsDetails": { type: t["./ups/dto/UpsCreatedResponse.dto"].UpsCreatedResponse } } }], [import("./vendor/vendor.controller"), { "VendorController": { "createVendor": { type: t["./vendor/dto/CreatedVendorResponse.dto"].CreatedVendorResponse }, "getAllVendors": { type: [t["./vendor/dto/CreatedVendorResponse.dto"].CreatedVendorResponse] }, "updateVendorDetails": {}, "getVendorDetailsById": { type: t["./vendor/dto/CreatedVendorResponse.dto"].CreatedVendorResponse } } }], [import("./monitor/monitor.controller"), { "MonitorController": { "addMonitor": { type: t["./monitor/dto/CreatedMonitorResponse.dto"].CreatedMonitorResponse }, "getMonitorsList": { type: [t["./monitor/dto/CreatedMonitorResponse.dto"].CreatedMonitorResponse] } } }]] } };
};
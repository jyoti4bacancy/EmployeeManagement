import {EmployeeController} from "./controller/EmployeeController";

export const Routes = [{
    method: "get",
    route: "/employees",
    controller: EmployeeController,
    action: "getAllEmployee"
}, {
    method: "get",
    route: "/employees/:id",
    controller: EmployeeController,
    action: "getEmployee"
}, {
    method: "post",
    route: "/employees",
    controller: EmployeeController,
    action: "register"
},

{
    method: "post",
    route: "/employees/login",
    controller: EmployeeController,
    action: "login"
},

{
    method: "put",
    route: "/employees/edit/:id",
    controller: EmployeeController,
    action: "updateEmployee"
},
{
    method: "delete",
    route: "/employees/:id",
    controller: EmployeeController,
    action: "removeEmployee"
}];
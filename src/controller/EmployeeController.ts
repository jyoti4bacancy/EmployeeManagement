import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Employee } from "../entity/Employee";

export class EmployeeController {

    private employeeRepository = getRepository(Employee);
    

    async getAllEmployee(request: Request, response: Response, next: NextFunction) {
        return this.employeeRepository.find();
    }

    async getEmployee(request: Request, response: Response, next: NextFunction) {
        return this.employeeRepository.findOne(request.params.id);
    }

    async register(request: Request, response: Response, next: NextFunction) {
        return this.employeeRepository.save(request.body);
    }

    async login(request: Request, response: Response, next: NextFunction) {
        let result=await this.employeeRepository.findOne({where:{emailId:request.body.emailId,password:request.body.password,role:request.body.role}});
        if(result)
        return {"message":"login is successful!", "flag":1  }
        else
        return {"message":"login is unsuccessful!!", "flag":0  }
    }

    async removeEmployee(request: Request, response: Response, next: NextFunction) {
        let employeeToRemove = await this.employeeRepository.findOne(request.params.id);
      return  await this.employeeRepository.remove(employeeToRemove);
    }

    async updateEmployee(request: Request, response: Response, next: NextFunction) {
        let emp = await this.employeeRepository.findOne(request.params.id);
         if(emp){
             this.employeeRepository.merge(emp,request.body)
             return  await this.employeeRepository.save(emp)
         }
         else{
            return {
                "message":"user doesn't exist!"
            }
         }
    }

 
}
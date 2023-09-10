import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../project/entities/project.entity';
import { ProjectService } from '../project/project.service';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>,
    private readonly projectService: ProjectService
  ) { }

  async getAllEmployees(): Promise<Employee[]> {

    return this.employeeRepository.find()

  }

  async createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {

    const newEmployee = this.employeeRepository.create(createEmployeeInput)

    return this.employeeRepository.save(newEmployee)

  }

  async getProject(id: string): Promise<Project> {

    return this.projectService.getProject(id)


  }


}

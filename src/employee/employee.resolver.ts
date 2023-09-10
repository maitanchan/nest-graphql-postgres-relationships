import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Project } from '../project/entities/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {

  constructor(private readonly employeeService: EmployeeService) { }

  @Query(() => [Employee], { name: 'getAllEmployees' })
  getAllEmployees() {

    return this.employeeService.getAllEmployees()

  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {

    return this.employeeService.createEmployee(createEmployeeInput)

  }

  @ResolveField(() => Project)
  getProject(@Parent() employee: Employee) {

    return this.employeeService.getProject(employee.projectId)

  }

}

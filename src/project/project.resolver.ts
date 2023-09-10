import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Resolver(() => Project)
export class ProjectResolver {

  constructor(private readonly projectService: ProjectService) { }

  @Mutation(() => Project)
  createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {

    return this.projectService.create(createProjectInput);

  }

  @Query(() => [Project], { name: 'getAllProject' })
  getAllProject() {

    return this.projectService.getAllProject();

  }

  @Query(() => Project, { name: 'getProject' })
  getProject(@Args('projectId') id: string) {

    return this.projectService.getProject(id);

  }

  @Mutation(() => Project)
  updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {

    return this.projectService.updateProject(updateProjectInput.id, updateProjectInput);

  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {

    return this.projectService.remove(id);

  }
}

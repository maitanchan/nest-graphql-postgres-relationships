import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private readonly pojectRepository: Repository<Project>) { }

  create(createProjectInput: CreateProjectInput): Promise<Project> {

    const newProject = this.pojectRepository.create(createProjectInput)

    return this.pojectRepository.save(newProject)

  }

  getAllProject(): Promise<Project[]> {

    return this.pojectRepository.find({ relations: ['employees'] })

  }

  async getProject(id: string): Promise<Project> {

    const project = await this.pojectRepository.findOne({ where: { id: id }, relations: ['employees'] })

    return project

  }

  async updateProject(id: string, updateProjectInput: UpdateProjectInput) {

    return `This action updates a #${id} project`;

  }

  remove(id: number) {

    return `This action removes a #${id} project`;

  }
}

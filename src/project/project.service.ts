import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './create-project.dto';
import { Team } from 'src/team/team.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}
  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const { name, startDate, deadLine, description, teamId } = createProjectDto;
    const team = await this.teamRepository.findOne({ where: { id: teamId } });
    if (!team) {
      throw new NotFoundException('team not found');
    }
    const project = this.projectRepository.create({
      name,
      deadLine,
      description,
      team,
      startDate,
    });
    return this.projectRepository.save(project);
  }
  async findProjects(): Promise<Project[]> {
    const projects = await this.projectRepository.find();
    return projects;
  }
  async getProjectById(id: string): Promise<Project> {
    const task = await this.projectRepository.findOne({
      where: { id: parseInt(id) },
    });
    return task;
  }
  async deleteProjectById(id: string): Promise<void> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Project not found');
    }
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './create-project.dto';
import { Project } from './project.entity';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  async createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }
  @Get()
  async findProjects(): Promise<Project[]> {
    return this.projectService.findProjects();
  }
  @Get('/:id')
  async getProjectById(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProjectById(id);
  }
  @Delete('/:id')
  deleteProjectById(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProjectById(id);
  }
}

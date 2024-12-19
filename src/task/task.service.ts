import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/project/project.entity';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from './task-status.enum';
import { AssignTaskDto } from './assign-task.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    const project = await this.projectRepository.findOne({
      where: { id: createTaskDto.projectId },
    });
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    task.project = project;
    return await this.projectRepository.save(task);
  }
  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();
    return tasks;
  }
  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { id: parseInt(id) },
    });
    return task;
  }
  async deleteTaskById(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('task not found');
    }
  }
  async updateTaskStatus(id: string, status: TaskStatus) {
    const task = await this.getTaskById(id);
    if (!task) {
      throw new NotFoundException('task not found');
    }
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }
  async assignUsersToTask(assignTaskDto: AssignTaskDto): Promise<Task> {
    const task = await this.getTaskById(assignTaskDto.taskId);
    if (!task) {
      throw new NotFoundException('task not found');
    }
    const user = await this.userRepository.findOne({
      where: { id: assignTaskDto.userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    task.assignedTo.push(user);
    return this.taskRepository.save(task);
  }
}

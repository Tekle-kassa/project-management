import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.entity';
import { updateTaskStatusDto } from './update-task-status.dto';
import { AssignTaskDto } from './assign-task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: updateTaskStatusDto,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.taskService.updateTaskStatus(id, status);
  }
  @Post('/assign')
  assign(@Body() assignTaskDto: AssignTaskDto): Promise<Task> {
    return this.taskService.assignUsersToTask(assignTaskDto);
  }
}

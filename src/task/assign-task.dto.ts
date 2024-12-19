import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class AssignTaskDto {
  @IsNotEmpty()
  taskId: string;

  @IsNotEmpty()
  userId: number; // Array of user IDs to assign to the task
}

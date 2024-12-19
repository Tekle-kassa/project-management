import { IsNotEmpty, IsString, IsDate, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  difficulty: string;

  @IsNotEmpty()
  @IsString()
  priority: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  deadLine: Date;

  @IsNotEmpty()
  projectId: number; // Assuming you are passing the project ID to associate the task
}

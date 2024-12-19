import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsDate()
  startDate: Date;
  @IsNotEmpty()
  @IsDate()
  deadLine: Date;
  @IsNotEmpty()
  @IsNumber()
  teamId: number;
}

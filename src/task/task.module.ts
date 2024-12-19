import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { ProjectModule } from 'src/project/project.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ProjectModule, UserModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}

import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { TeamModule } from 'src/team/team.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), TeamModule],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService, TypeOrmModule],
})
export class ProjectModule {}

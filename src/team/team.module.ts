import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService, TypeOrmModule],
})
export class TeamModule {}

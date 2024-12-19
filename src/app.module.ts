import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProgressModule } from './progress/progress.module';
import { ProjectModule } from './project/project.module';
import { TeamModule } from './team/team.module';
import { TaskModule } from './task/task.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'project management system',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Load entities from specific paths
      autoLoadEntities: true,
      synchronize: true,
    }),

    UserModule,
    ProgressModule,
    ProjectModule,
    TeamModule,
    TaskModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

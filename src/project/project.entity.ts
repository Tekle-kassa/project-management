import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProject } from './userProject.entitty';
import { Task } from 'src/task/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startDate: Date;
  @Column({ type: 'timestamp' })
  deadLine: Date;
  @ManyToOne(() => Team, (team) => team.projects)
  team: Team;
  @OneToMany(() => UserProject, (userProject) => userProject.project)
  userProjects: UserProject[];
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}

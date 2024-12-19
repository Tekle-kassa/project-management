import { Project } from 'src/project/project.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  difficulty: string;
  @Column()
  priority: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startDate: Date;
  @Column({ type: 'timestamp' })
  deadLine: Date;
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
  @ManyToMany(() => User, (user) => user.tasks)
  @JoinTable()
  assignedTo: User[];
  @Column()
  status: string;
}

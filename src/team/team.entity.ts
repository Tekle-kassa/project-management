import { Project } from 'src/project/project.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.teams)
  @JoinTable()
  members: User[];
  @OneToMany(() => Project, (project) => project.team)
  projects: Project[];
}

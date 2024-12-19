import { Project } from 'src/project/project.entity';
import { UserProject } from 'src/project/userProject.entitty';
import { Role } from 'src/role/role.entity';
import { Task } from 'src/task/task.entity';
import { Team } from 'src/team/team.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
  @ManyToMany(() => Team, (team) => team.members)
  teams: Team[];
  @OneToMany(() => UserProject, (userProject) => userProject.user)
  userProjects: UserProject[];
  @ManyToMany(() => Task, (task) => task.assignedTo)
  tasks: Task[];
}

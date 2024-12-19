import { User } from 'src/user/user.entity';
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { Role } from 'src/role/role.entity';

@Entity()
export class UserProject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userProjects)
  user: User;
  @ManyToOne(() => Project, (project) => project.userProjects)
  project: Project;
  @ManyToMany(() => Role)
  roles: Role[];
}

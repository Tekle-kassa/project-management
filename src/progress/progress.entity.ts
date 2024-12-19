import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  progressUpdate: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}

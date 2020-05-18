import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: number;

  @Column()
  date: string;

  @Column()
  created_datetime: string;

  @Column()
  updated_datetime: string;

  @Column()
  student_id: number;

  @Column()
  remark: string;

  // @Column({ default: true })
  // isActive: boolean;
}

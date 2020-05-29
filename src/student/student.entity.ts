import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attendance } from '../attendance/attendance.entity'

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  kana_first_name: string;

  @Column()
  kana_last_name: string;

  @Column()
  created_datetime: string;

  @Column()
  updated_datetime: string;

  @Column()
  class_id: number;

  @Column()
  studentNumber: number;

  @OneToMany(type => Attendance, attendance => attendance.student)
    attendances: Attendance[];

  // @Column({ default: true })
  // isActive: boolean;
}

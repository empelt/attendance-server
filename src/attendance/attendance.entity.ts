import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity'

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
  studentId: number;

  @Column()
  remark: string;

  @ManyToOne(type => Student, student => student.attendances)
    student: Student;
  // @Column({ default: true })
  // isActive: boolean;
}

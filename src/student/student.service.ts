import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder, getRepository,EntityManager,getConnection } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const now = new Date();
    const student = new Student();
    student.id = createStudentDto.id;
    student.first_name = createStudentDto.first_name;
    student.last_name = createStudentDto.last_name;
    student.kana_first_name = createStudentDto.kana_first_name;
    student.kana_last_name = createStudentDto.kana_last_name;
    student.class_id = createStudentDto.class_id;
    student.created_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    student.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    return this.studentRepository.save(student);
  }

  async update(updateStudentDto: UpdateStudentDto): Promise<Student> {
    const now = new Date();
    const student = await this.studentRepository.findOne({
      id: updateStudentDto.id,
    });
    student.first_name = updateStudentDto.first_name;
    student.last_name = updateStudentDto.last_name;
    student.kana_first_name = updateStudentDto.kana_first_name;
    student.kana_last_name = updateStudentDto.kana_last_name;
    student.class_id = updateStudentDto.class_id;
    student.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
  async findbyclassid(id: string): Promise<any> {
    // const user = await this.attendanceRepository.createQueryBuilder("attendance")
    //   .innerJoinAndSelect("student.attendances", "attendance");
    return this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.attendances', 'attendance')
      .where('class_id = :class_id', { class_id: id })
      .getMany();
    // return this.attendanceRepository.find({
    //   relations: ['student'],
    // });
  }

  async countattendance(id: number): Promise<any> {
    const query = getConnection().query('SELECT type, studentId, count(type) as count, first_name, last_name, class_id FROM new_schema.attendance inner join student on student.id = attendance.studentId group by studentId, type order by studentId, type;');
    return query
  }
}

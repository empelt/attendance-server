import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateStatusAttendanceDto } from './dto/update-status-attendance.dto';
import { Attendance } from './attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
  ) {}

  create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const now = new Date();
    const attendance = new Attendance();
    attendance.id = createAttendanceDto.id;
    attendance.type = createAttendanceDto.type;
    attendance.date = createAttendanceDto.date;
    attendance.created_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    attendance.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    attendance.student_id = createAttendanceDto.student_id;
    return this.attendanceRepository.save(attendance);
  }

  async update(updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
    const now = new Date();
    const attendance = await this.attendanceRepository.findOne({id: updateAttendanceDto.id})
    //クライアントからの取得したIDを元にユーザを検索
    //クライアントから取得したパラメータを設定
    attendance.type = updateAttendanceDto.type;
    attendance.date = updateAttendanceDto.date;
    attendance.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    attendance.student_id = updateAttendanceDto.student_id;
    return this.attendanceRepository.save(attendance);
  }

  async updatestatus(updatestatusAttendanceDto: UpdateStatusAttendanceDto): Promise<Attendance> {
    const now = new Date();
    const attendance = await this.attendanceRepository.findOne({id: updatestatusAttendanceDto.id})
    attendance.type = updatestatusAttendanceDto.type;
    attendance.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    return this.attendanceRepository.save(attendance);
  }


  async findAll(): Promise<Attendance[]> {
    return this.attendanceRepository.find();
  }

  findOne(id: string): Promise<Attendance> {
    return this.attendanceRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.attendanceRepository.delete(id);
  }
}

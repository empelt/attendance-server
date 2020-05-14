import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateStatusAttendanceDto } from './dto/update-status-attendance.dto';
import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('create')
  create(@Body() createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Post('update')
  update(@Body() updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
    return this.attendanceService.update(updateAttendanceDto);
  }

  @Post('updatestatus')
  updatestatus(@Body() updatestatusAttendanceDto: UpdateStatusAttendanceDto): Promise<Attendance> {
    return this.attendanceService.updatestatus(updatestatusAttendanceDto);
  }

  @Get()
  findAll(): Promise<Attendance[]> {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Attendance> {
    return this.attendanceService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.attendanceService.remove(id);
  }
}

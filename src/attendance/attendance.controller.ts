import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { UpdateTypeAttendanceDto } from './dto/update-type-attendance.dto';
import { UpdateRemarkAttendanceDto } from './dto/update-remark-attendance.dto';
import { FindByStudentIdAttendanceDto } from './dto/findbystudentid.dto';
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

  @Post('updatetype')
  updatetype(@Body() updatetypeAttendanceDto: UpdateTypeAttendanceDto): Promise<Attendance> {
    return this.attendanceService.updatetype(updatetypeAttendanceDto);
  }

  @Post('updateremark')
  updateremark(@Body() updateremarkAttendanceDto: UpdateRemarkAttendanceDto): Promise<Attendance> {
    return this.attendanceService.updateremark(updateremarkAttendanceDto);
  }

  @Post('findbystudentid')
  findbystudentid(@Body() findbystudentidattendanceDto: FindByStudentIdAttendanceDto): Promise<Attendance[]> {
    return this.attendanceService.findbystudentid(findbystudentidattendanceDto);
  }

  // @Get('countattendance/:id')
  // countattendance(@Param('id') id: number): Promise<any> {
  //   return this.attendanceService.countattendance(id);
  // }

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

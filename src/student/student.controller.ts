import { Body, Controller, Delete, Get, Param, Post, Res} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { Response } from 'express'

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post('create')
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Post('update')
  update(@Body() updateUserDto: UpdateStudentDto): Promise<Student> {
    return this.studentService.update(updateUserDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(id);
  }
  @Get('findbyclassid/:id')
  findbyclassid(@Param('id') id: string): Promise<any> {
    console.log('helo');
    return this.studentService.findbyclassid(id);
  }
  @Get('countattendance/:id')
  countattendance(@Param('id') id: number): Promise<any> {
    return this.studentService.countattendance(id);
  }

  @Get('csv/:id')
  async getCsv(@Res() res: Response){
    const strigifier = await this.studentService.getCsvStream();
    res.setHeader('Content-Type', 'text/csv');
    return strigifier.pipe(res);
  }
}

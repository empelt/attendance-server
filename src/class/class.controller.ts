import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { FindByClassGradeClassDto } from './dto/findbygrade.dto';
import { Class } from './class.entity';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post('create')
  create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classService.create(createClassDto);
  }

  @Post('update')
  update(@Body() updateClassDto: UpdateClassDto): Promise<Class> {
    return this.classService.update(updateClassDto);
  }

  @Get()
  findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Class> {
    return this.classService.findOne(id);
  }
  @Post('findbyclassgrade')
  findbyclassgrade(@Body() findbyclassgradeClassDto: FindByClassGradeClassDto): Promise<Class[]> {
    return this.classService.findbyclassgrade(findbyclassgradeClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.classService.remove(id);
  }
}

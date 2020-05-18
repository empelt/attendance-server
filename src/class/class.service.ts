import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { FindByClassGradeClassDto } from './dto/findbygrade.dto';
import { Class } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  create(createClassDto: CreateClassDto): Promise<Class> {
    const now = new Date();
    const classes = new Class();
    classes.id = createClassDto.id;
    classes.name = createClassDto.name;
    classes.created_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    classes.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
      classes.grade = createClassDto.grade;
    return this.classRepository.save(classes);
  }

  async update(updateClassDto: UpdateClassDto): Promise<Class> {
    const now = new Date();
    const classes = await this.classRepository.findOne({id: updateClassDto.id})
    classes.name = updateClassDto.name;
    classes.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    classes.grade = updateClassDto.grade;
    return this.classRepository.save(classes);
  }

  async findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  async findbyclassgrade(findbyclassgradeClassDto: FindByClassGradeClassDto): Promise<Class[]> {
    return this.classRepository.find({grade: findbyclassgradeClassDto.grade});
  }

  findOne(id: string): Promise<Class> {
    return this.classRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.classRepository.delete(id);
  }
}

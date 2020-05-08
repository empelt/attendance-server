import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { Class } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  create(createClassDto: CreateClassDto): Promise<Class> {
    const classes = new Class();
    // user.firstName = createUserDto.firstName;
    // user.lastName = createUserDto.lastName;

    return this.classRepository.save(classes);
  }

  async findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  findOne(id: string): Promise<Class> {
    return this.classRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.classRepository.delete(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [TypeOrmModule],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}

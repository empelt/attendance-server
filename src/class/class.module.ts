import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  exports: [TypeOrmModule],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}

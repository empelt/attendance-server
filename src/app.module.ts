import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { AttendanceModule } from './attendance/attendance.module';
import { Connection } from 'typeorm';


import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TestModule,
    UsersModule,
    StudentModule,
    ClassModule,
    AttendanceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'techf0rward',
      database: 'new_schema',
      entities: [],
      // synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { AttendanceModule } from './attendance/attendance.module';
import { Connection } from 'typeorm';


import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    UsersModule,
    StudentModule,
    ClassModule,
    AttendanceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      //extra: {"socketPath": '/cloudsql/${"attendance-275602:asia-east1:attendance"}'},
      //socketPath: `/cloudsql/${"attendance-275602:asia-east1:attendance"}`,
      username: 'root',
      password: 'techf0rward',
      database: 'new_schema',
      entities: [],
      // synchronize: true,
      autoLoadEntities: true,
    }),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}


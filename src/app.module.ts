import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';


import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TestModule,
    UsersModule,
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


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TestModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'techf0rward',
      database: 'new_schema',
      entities: [],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

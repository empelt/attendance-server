import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TestModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.80.234.243',
      port: 3000,
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

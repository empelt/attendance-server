import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });
   app.enableCors({
     origin: '*',
     allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
   });
  await app.listen(PORT);
}
bootstrap();

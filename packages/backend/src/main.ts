import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // Only in production
  app.setGlobalPrefix('aennesia/api');

  app.enableCors({
    origin: 'https://www.aennesia.fr',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();

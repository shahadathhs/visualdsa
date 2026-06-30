import { NestFactory } from '@nestjs/core';
import { ValidationPipe, type NestApplicationOptions } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../app.module';

export async function createApp(options?: NestApplicationOptions) {
  const app = await NestFactory.create(AppModule, options);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('VisualDSA API')
    .setDescription('VisualDSA API Documentation')
    .setVersion('0.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  return { app, document };
}

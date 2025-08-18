import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express(); // ✅ now callable

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors({
    origin: (process.env.ALLOWED_ORIGIN ?? '*').split(','),
    credentials: true,
  });

  await app.init(); // ⚠️ don't call app.listen() on Vercel
}

bootstrap();

export default server; // ✅ exported for Vercel

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  // const privateKey = fs.readFileSync('./52.194.225.81-key.pem', 'utf8');
  // const certificate = fs.readFileSync('./52.194.225.81.pem', 'utf8');
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // const httpsOptions = { key: privateKey, cert: certificate };
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  http.createServer(server).listen(80);
}
bootstrap();

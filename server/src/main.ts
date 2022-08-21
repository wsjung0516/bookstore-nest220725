import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
export let HOST_NAME;
async function bootstrap() {
  HOST_NAME = await process.env.NODE_ENV === 'dev' ? 'mysql-con' : 'localhost'; 
  console.log('---- NODE_ENV', process.env.NODE_ENV,HOST_NAME);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen( 80);
  // await app.listen( 3000);
}
bootstrap();

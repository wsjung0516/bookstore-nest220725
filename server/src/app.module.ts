import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/book-entity';
import { ConfigModule } from '@nestjs/config';
import { HOST_NAME } from './main';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        // host: 'host.docker.internal',  // used for communication between containers and
        // host: 'mysql-con',                // used for docker-compose yml file
        // host: 'localhost',             // used for ECS fargate
        host: HOST_NAME,
        port: 3306,
        username: 'root',
        password: 'root_password',
        database: 'mysql-db',
        entities: [Book],
        synchronize: true
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
/** 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        // host: 'host.docker.internal',  // used for communication between containers and
        // host: 'mysql-con',                // used for docker-compose yml file
        // host: 'localhost',             // used for ECS fargate
        host: process.env.NODE_DEV === 'dev' ? 'mysql-con' : 'localhost',
        port: 3306,
        username: 'root',
        password: 'root_password',
        database: 'mysql-db',
        entities: [Book],
        synchronize: true
    }),
    BooksModule,
***/
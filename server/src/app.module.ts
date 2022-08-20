import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/book-entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        // host: 'host.docker.internal',  // used for communication between containers and
        host: 'mysql-con',                // used for docker-compose yml file
        // host: 'localhost',             // used for ECS fargate
        port: 3306,
        username: 'root',
        password: 'root_password',
        database: 'mysql-db',
        entities: [Book],
        // entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

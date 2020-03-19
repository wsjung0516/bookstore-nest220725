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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'bharti123',
        database: 'bookstore-nest',
        entities: [Book],
        synchronize: true
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    title: string;

    @Column({ length: 100 })
    description: string;

    @Column({ length: 50 })
    author: string;

    @Column({ default: true })
    isActive: boolean;
}

CREATE TABLE book (
    id int primary key AUTO_INCREMENT NOT NULL,
    title varchar(50),
    description varchar(255),
    author varchar(255),
    isActive BOOLEAN
);

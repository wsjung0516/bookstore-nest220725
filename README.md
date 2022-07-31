# bookstore-nest
##  Docker, CRUD APP with NestJS, Angular and MySQL
---------
### Database
```bash
FROM mysql:5.7
# ENV MYSQL_USER root
ENV MYSQL_USERNAME jung
ENV MYSQL_PASSWORD root_password
ENV MYSQL_ROOT_PASSWORD root_password
ENV MYSQL_DATABASE mysql-db

# 도커환경에서 컨테이너 생성시 스크립트를 실행하는 폴더로
# 미리 작성된 스크립트들을 이동

EXPOSE 3306

ADD ./scripts/ /docker-entrypoint-initdb.d/
```
### docker build -t mysql-db .

### docker run --rm  --name my-db -p 3306:3306  
### -v ./datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root_password 
### mysql-db
------------
## server


```bash
# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]
```

### docker build -t my-backend .
### docker run -it --rm -p 3000:3000  --name my-backend-con --network mysql-net -hmy-db  -uroot my-backend


```
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'host.docker.internal',
        // host: 'my-db',
        port: 3306,
        username: 'root',
        password: 'root_password',
        database: 'mysql-db',
        entities: [Book],
        // entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
```
------------
## client

```bash
# syntax=docker/dockerfile:1
FROM node:14.17.0-alpine as node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.20.1
COPY --from=node /app/dist/my-first-angular-app /usr/share/nginx/html
EXPOSE 4200:80

```


### docker build -t client .
### docker run -it --rm --name client-app -p 80:80  --network mysql-net  client
---
## docker-compose.yml

```bash
version: '3.8'
services:
  mysql:
    container_name: my-db
    build: ./mysql 
    volumes:
      - data:/var/lib/mysql
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=root_password
  server:
    container_name: my-backend
    build: ./server 
    volumes:
       - /app/node_modules
    ports:
      - 3000:3000
    depends_on:
       - mysql
  client:
    container_name: client-app
    build: ./client
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - '80:80'
volumes:
  data:
```
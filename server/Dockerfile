# syntax=docker/dockerfile:1

FROM node:14.17.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
# EXPOSE 3000
EXPOSE 80
CMD ["npm","run","start"]
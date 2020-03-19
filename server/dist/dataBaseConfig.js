"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = {
    database: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'bharti123',
        database: 'bookstore-nest',
        entities: [__dirname + '/../**/*.entity{.ts, .js}'],
        synchronize: true
    }
};
//# sourceMappingURL=dataBaseConfig.js.map
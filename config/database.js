/*
require('dotenv').config();

    module.exports = {
        development: {
            url: process.env.DATABASE_URL,
            dialect: 'postgres',
        },
        test: {
            url: process.env.DATABASE_URL,
            dialect: 'postgres',
        },
        production: {
            url: process.env.DATABASE_URL,
            dialect: 'postgres',
        },
    };
*/
require('dotenv').config();

module.exports = {
    development: {
        username: "postgres",
        password: "Postgres@771231", // real password here
        database: "postgres",
        host: "localhost",
        dialect: "postgres",
        logging: false,  // (optional) if you don't want SQL query logs
    },
    test: {
        username: "postgres",
        password: "Postgres@771231",
        database: "postgres",
        host: "localhost",
        dialect: "postgres",
        logging: false,
    },
    production: {
        username: "postgres",
        password: "Postgres@771231",
        database: "postgres",
        host: "localhost",
        dialect: "postgres",
        logging: false,
    },
};

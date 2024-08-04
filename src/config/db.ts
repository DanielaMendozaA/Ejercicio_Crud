// import { Sequelize, Dialect } from "sequelize";
// import { config } from "dotenv";
// import { resolve } from "path";
// import UserModel from "../models/userModel";

// config({path: resolve(__dirname, "../../.env")});

// const dbDialect: Dialect | undefined = process.env.DB_DIALECT as Dialect;
// const dbHost: string | undefined = process.env.DB_HOST;
// const dbUser: string | undefined = process.env.DB_USER;
// const dbPassword: string | undefined = process.env.DB_PASSWORD;
// const dbName: string | undefined = process.env.DB_NAME;

// if (!dbDialect || !dbHost || !dbUser || !dbPassword || !dbName) {
//     throw new Error("Please provide all the environment variables for the database connection!");
// }


// const sequelize: Sequelize = new Sequelize({
//     dialect: dbDialect,
//     host: dbHost,
//     username: dbUser,
//     password: dbPassword,
//     database: dbName,
//     models: [UserModel]
// });

// export default sequelize;

import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import { resolve } from 'path';
import { Dialect } from 'sequelize';
import UserModel from '../models/userModel';
import ProductModel from '../models/produtModel';

config({path: resolve(__dirname, "../../.env")});

const dialect: Dialect | undefined = process.env.DB_DIALECT as Dialect;
const dbHost: string | undefined = process.env.DB_HOST;
const dbUser: string | undefined = process.env.DB_USER;
const dbPassword: string | undefined = process.env.DB_PASSWORD;
const dbName: string | undefined = process.env.DB_NAME;

if (!dialect || !dbHost || !dbUser || !dbPassword || !dbName) {
        throw new Error("Please provide all the environment variables for the database connection!");
}

const sequelize: Sequelize = new Sequelize({
    dialect: dialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    models: [UserModel, ProductModel]
});

export default sequelize;
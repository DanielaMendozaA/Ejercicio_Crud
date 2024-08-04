"use strict";
// import { Sequelize, Dialect } from "sequelize";
// import { config } from "dotenv";
// import { resolve } from "path";
// import UserModel from "../models/userModel";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("../models/userModel");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const produtModel_1 = __importDefault(require("../models/produtModel"));
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
const dialect = process.env.DB_DIALECT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
if (!dialect || !dbHost || !dbUser || !dbPassword || !dbName) {
    throw new Error("Please provide all the environment variables for the database connection!");
}
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: dialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    models: [userModel_1.UserModel, produtModel_1.default]
});
exports.default = sequelize;

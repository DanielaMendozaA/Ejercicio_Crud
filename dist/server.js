"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Connection has been established successfully.");
        await db_1.default.sync({ force: true }); // force : true = Esta opción indica que Sequelize debe eliminar las tablas existentes y volver a crearlas.
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("There was an error trying to connect the database", err);
    }
};
startServer();

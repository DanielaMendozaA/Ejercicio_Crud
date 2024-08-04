"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", userController_1.default.getAllUsers);
exports.userRouter.get("/:id", userController_1.default.getUserById);
exports.userRouter.put("/:id", userController_1.default.updateUser);
exports.userRouter.delete("/:id", userController_1.default.deleteUser);
exports.userRouter.get("/:id/products", userController_1.default.getUserWithProducts);

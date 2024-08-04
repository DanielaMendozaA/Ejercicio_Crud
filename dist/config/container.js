"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const userService_1 = __importDefault(require("../services/userService"));
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const productService_1 = __importDefault(require("../services/productService"));
tsyringe_1.container.registerSingleton("UserRepository", userRepository_1.default);
tsyringe_1.container.registerSingleton("UserService", userService_1.default);
tsyringe_1.container.registerSingleton("ProductRepository", productRepository_1.default);
tsyringe_1.container.registerSingleton("ProductService", productService_1.default);

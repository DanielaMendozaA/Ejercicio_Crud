"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get("/", productController_1.default.getAllProducts);
exports.productRouter.get("/:id", productController_1.default.getProductById);
exports.productRouter.post("/", productController_1.default.createProduct);
exports.productRouter.put("/:id", productController_1.default.updateProduct);
exports.productRouter.delete("/:id", productController_1.default.deleteProduct);

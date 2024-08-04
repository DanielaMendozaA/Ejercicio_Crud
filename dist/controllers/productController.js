"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
const tsyringe_1 = require("tsyringe");
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const products = await productService.getAllProducts();
            res.status(200).json({
                status: 200,
                products: products
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getProductById(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const id = parseInt(req.params.id);
            const product = await productService.getProductById(id);
            if (!product) {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                product
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = req.body;
            const newProduct = await productService.createProduct(product);
            res.status(201).json({
                status: 201,
                product: newProduct
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async updateProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const id = parseInt(req.params.id);
        const product = req.body;
        try {
            const [affectedCount] = await productService.updateProduct(id, product);
            if (affectedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Product updated'
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteProduct(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const id = parseInt(req.params.id);
        try {
            const deletedCount = await productService.deleteProduct(id);
            if (deletedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Product not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Product deleted'
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = ProductController;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const tsyringe_1 = require("tsyringe");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAllProducts() {
        return await this.productRepository.findAll();
    }
    async getProductById(id) {
        return await this.productRepository.findById(id);
    }
    async createProduct(product) {
        return await this.productRepository.create(product);
    }
    async updateProduct(id, product) {
        return await this.productRepository.update(id, product);
    }
    async deleteProduct(id) {
        return await this.productRepository.delete(id);
    }
};
ProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('ProductRepository')),
    __metadata("design:paramtypes", [productRepository_1.default])
], ProductService);
exports.default = ProductService;

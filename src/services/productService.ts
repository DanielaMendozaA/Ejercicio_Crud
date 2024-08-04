import ProductRepository from "../repositories/productRepository";
import { injectable, inject } from "tsyringe";
import ProductModel from "../models/produtModel";
import { ProductType } from "../interfaces/product";

@injectable()
export default class ProductService {
    constructor(@inject('ProductRepository') private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<ProductType[]> {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number): Promise<ProductType | null> {
        return await this.productRepository.findById(id);
    }

    async createProduct(product: Partial<ProductModel>): Promise<ProductType | null> {
        return await this.productRepository.create(product);
    }

    async updateProduct(id: number, product: Partial<ProductType>): Promise<[affectedCount: number]> {
        return await this.productRepository.update(id, product);
    }

    async deleteProduct(id: number): Promise<number> {
        return await this.productRepository.delete(id);
    }

}
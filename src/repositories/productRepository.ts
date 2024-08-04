import { injectable } from "tsyringe";
import ProductModel from "../models/produtModel";
import { ProductType } from "../interfaces/product";

@injectable()
export default class ProductRepository {
    async findAll(): Promise<ProductType[]>{
        return await ProductModel.findAll();
    }

    async findById(id: number): Promise<ProductType | null>{
        return await ProductModel.findByPk(id);
    }

    async create(product: Partial<ProductType>): Promise<ProductType>{
       return await ProductModel.create(product as ProductModel);
    }

    async update(id: number, product: Partial<ProductType>): Promise<[number]>{
        return await ProductModel.update(product, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await ProductModel.destroy({where: {id}});
    }


}
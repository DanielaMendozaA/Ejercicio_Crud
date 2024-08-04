import UserRepository from '../repositories/userRepository';
import {injectable, inject} from 'tsyringe';
import UserModel from '../models/userModel';
import { UserType } from '../interfaces/user';

@injectable()
export default class UserService{
    constructor(@inject('UserRepository') private userRepository: UserRepository){}

    async getAllUsers(): Promise<UserType[]>{
        return await this.userRepository.findAll();
    }

    async getUserById(id: number): Promise<UserType | null>{
        return await this.userRepository.findById(id);
    }

    async createUser(user: Partial<UserModel>): Promise<UserType | null>{
        return await this.userRepository.create(user);
    }

    async updateUser(id: number, user: Partial<UserType>): Promise<[affectedCount: number]>{
        return await this.userRepository.update(id, user);
    }

    async deleteUser(id: number) : Promise<number>{
        return await this.userRepository.delete(id);
    }

    async getUserByEmail(email: string): Promise<UserType | null>{
        return await this.userRepository.findByEmail(email);
    }

    async checkUserCredentials(email:string, password: string): Promise<Partial<UserModel> | undefined>{
        const user = await this.getUserByEmail(email);
        if(user &&  user.password === password){
            return user;
        }
        throw new Error('Invalid credentials');
    }

    async getUserWithProducts(id: number): Promise<UserType | null>{
        return await this.userRepository.findProductsWithUser(id);
    }
    
    async getUserWithSpecificProduct(id: number): Promise<UserType | null>{
        return await this.userRepository.findProductWithUserSpecific(id);
    }
}
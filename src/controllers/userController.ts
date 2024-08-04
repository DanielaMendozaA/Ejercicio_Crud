import UserService from "../services/userService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { UserType } from "../interfaces/user";

export default class UserController{
    // static userService = container.resolve(UserService);

    static async getAllUsers(req: Request, res: Response){
        try{
            const userService: UserService = container.resolve(UserService);
            const users: UserType[] = await userService.getAllUsers();
            res.status(200).json({
                status: 200,
                users: users
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async getUserById(req: Request, res: Response){
        try{
            const userService: UserService = container.resolve(UserService);
            const id: number = parseInt(req.params.id);
            const user: UserType | null = await userService.getUserById(id);
            if(!user){
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
                return;
            }
           user.password = '';
            res.status(200).json({
                status: 200,
                user
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async updateUser(req: Request, res: Response){
        const userService: UserService = container.resolve(UserService);
        const id: number = parseInt(req.params.id);
        const user: Partial<UserType> = req.body;
        try{
            const [affectedCount]: number[] = await userService.updateUser(id, user);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'User updated successfully'
            });
        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }  
    }

    static async deleteUser(req: Request, res: Response){
        const userService: UserService = container.resolve(UserService);
        const id: number = parseInt(req.params.id);
        try{
            const affectedCount: number = await userService.deleteUser(id);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'User deleted successfully'
            });
        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }


    static async getUserWithProducts(req: Request, res: Response){
        const userService: UserService = container.resolve(UserService);
        const id: number = parseInt(req.params.id);
        try{
            const user: UserType | null = await userService.getUserWithProducts(id);
            if(!user){
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                user
            });
        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async getUserWithSpecificProduct(req: Request, res: Response){
        const userService: UserService = container.resolve(UserService);
        const id: number = parseInt(req.params.id);
        try{
            const user: UserType | null = await userService.getUserWithSpecificProduct(id);
            if(!user){
                res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                user
            });
        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
    
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const tsyringe_1 = require("tsyringe");
class UserController {
    // static userService = container.resolve(UserService);
    static async getAllUsers(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const users = await userService.getAllUsers();
            res.status(200).json({
                status: 200,
                users: users
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getUserById(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const id = parseInt(req.params.id);
            const user = await userService.getUserById(id);
            if (!user) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async updateUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        const user = req.body;
        try {
            const [affectedCount] = await userService.updateUser(id, user);
            if (affectedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteUser(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        try {
            const affectedCount = await userService.deleteUser(id);
            if (affectedCount === 0) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getUserWithProducts(req, res) {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        try {
            const user = await userService.getUserWithProducts(id);
            if (!user) {
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
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = UserController;

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
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const tsyringe_1 = require("tsyringe");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        return await this.userRepository.findAll();
    }
    async getUserById(id) {
        return await this.userRepository.findById(id);
    }
    async createUser(user) {
        return await this.userRepository.create(user);
    }
    async updateUser(id, user) {
        return await this.userRepository.update(id, user);
    }
    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
    async getUserByEmail(email) {
        return await this.userRepository.findByEmail(email);
    }
    async checkUserCredentials(email, password) {
        const user = await this.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        throw new Error('Invalid credentials');
    }
    async getUserWithProducts(id) {
        return await this.userRepository.findProductsWithUser(id, 'ProductModel');
    }
};
UserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserRepository')),
    __metadata("design:paramtypes", [userRepository_1.default])
], UserService);
exports.default = UserService;

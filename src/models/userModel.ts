import ProductModel from './produtModel';
import {
        Table,
        Column,
        Model,
        DataType,
        PrimaryKey,
        AutoIncrement,
        HasMany
    } from 'sequelize-typescript';

    @Table({
        tableName: 'users',
        timestamps: true
    })
    
    export default class UserModel extends Model<UserModel> {
        static attributes(arg0: string, attributes: any, arg2: {}) {
            throw new Error("Method not implemented.");
        }
        @PrimaryKey
        @AutoIncrement
        @Column({
            type: DataType.INTEGER
        })
        id!: number;

        @Column({
            type: DataType.STRING,
            allowNull: false
        })
        name!: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
            unique: true
        })
        email!: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        password!: string;

        @HasMany(() => ProductModel)
        products!: ProductModel[];

    }

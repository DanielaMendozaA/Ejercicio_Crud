import UserModel from './userModel';
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';

@Table({
    tableName: 'products',
    timestamps: true
})

export default class ProductModel extends Model<ProductModel> {
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
    })
    description!: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    stock!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category!: string;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

}
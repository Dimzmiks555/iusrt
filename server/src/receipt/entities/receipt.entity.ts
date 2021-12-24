import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Client } from "src/client/entities/client.entity";

@Table({tableName: 'receipts'})
export class Receipt extends Model{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Client)
    @Column({type: DataType.INTEGER})
    client_id: number;

    @Column({type: DataType.STRING})
    src: string;

    @Column({type: DataType.INTEGER})
    summ: number;
    
    @Column({type: DataType.STRING, defaultValue: 'need_payment'})
    status: string;

    @BelongsTo(() => Client)
    client: Client;

    
}

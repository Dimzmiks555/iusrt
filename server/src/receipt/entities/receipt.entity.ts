import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({tableName: 'receipts'})
export class Receipt extends Model{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER})
    client_id: number;

    @Column({type: DataType.STRING})
    src: string;

    @Column({type: DataType.INTEGER})
    summ: number;
    
    @Column({type: DataType.STRING})
    status: string;

    
}

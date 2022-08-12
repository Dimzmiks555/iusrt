import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Receipt } from "src/receipt/entities/receipt.entity";

@Table
export class File extends Model {
    
    @Column
    name: string;

    @ForeignKey(() => Receipt)
    @Column
    receipt_id: string



}

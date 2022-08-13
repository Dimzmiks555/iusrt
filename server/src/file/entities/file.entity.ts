import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Receipt } from "src/receipt/entities/receipt.entity";
import { Service } from "src/service/entities/service.entity";

@Table
export class File extends Model {
    
    @Column
    name: string;

    @ForeignKey(() => Receipt)
    @Column({type: DataType.INTEGER})
    receipt_id: string

    @ForeignKey(() => Service)
    @Column
    service_id: number

}

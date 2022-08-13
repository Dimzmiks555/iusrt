import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Client } from "src/client/entities/client.entity";
import { ConfirmationDocument } from "src/confirmation-document/entities/confirmation-document.entity";
import { File } from "src/file/entities/file.entity";

@Table({tableName: 'receipts'})
export class Receipt extends Model{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Client)
    @Column({type: DataType.INTEGER})
    client_id: number;

    @Column({type: DataType.STRING})
    src: string;

    @Column({type: DataType.DECIMAL(10, 2)})
    summ: number;
    
    @Column({type: DataType.STRING, defaultValue: 'need_payment'})
    status: string;

    @BelongsTo(() => Client)
    client: Client;

    @HasMany(() => File, 'receipt_id')
    files: Array<File>

    @HasMany(() => ConfirmationDocument, 'receipt_id')
    confirmation_documents: Array<ConfirmationDocument>

    
}

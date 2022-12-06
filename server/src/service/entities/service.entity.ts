import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Client } from "src/client/entities/client.entity";
import { ConfirmationDocument } from "src/confirmation-document/entities/confirmation-document.entity";
import { File } from "src/file/entities/file.entity";

@Table
export class Service extends Model {

    @ForeignKey(() => Client)
    @Column
    client_id: number;

    @Column({type: DataType.DECIMAL(10, 2)})
    summ: number;
    
    @Column({defaultValue: 'need_payment'})
    status: string;
    
    @Column({type: DataType.TEXT})
    comment: string;

    @Column
    subtitle: string;

    @BelongsTo(() => Client)
    client: Client;

    @HasMany(() => File, 'service_id')
    files: Array<File>

    @HasMany(() => ConfirmationDocument, 'service_id')
    confirmation_documents: Array<ConfirmationDocument>


}

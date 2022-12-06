import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Client } from "src/client/entities/client.entity";

@Table
export class ClientFile extends Model {
    
    @Column
    name: string;

    @Column
    filename: string;

    @ForeignKey(() => Client)
    @Column
    client_id: number



}

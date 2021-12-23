import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({tableName: 'clients'})
export class Client extends Model{

    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    last_name: string;
    
    @Column({type: DataType.STRING})
    first_name: string;
    
    @Column({type: DataType.STRING})
    sur_name: string;
    
    @Column({type: DataType.STRING})
    inn: string;
    
    @Column({type: DataType.STRING})
    ogrnip: string;

    @Column({type: DataType.STRING})
    tax_system: string;

    @Column({type: DataType.STRING})
    email: string;
    
    @Column({type: DataType.STRING})
    phone: string;
    
    @Column({type: DataType.STRING})
    social_account_number: string;

    @Column({type: DataType.STRING, defaultValue: false})
    is_closed: string;

    @Column({type: DataType.STRING})
    address: string;

    @Column({type: DataType.STRING})
    city: string;
    
    @Column({type: DataType.STRING})
    region: string;

    @Column({type: DataType.STRING})
    area: string;

    @Column({type: DataType.STRING})
    street: string;

    @Column({type: DataType.STRING})
    house: string;

    @Column({type: DataType.STRING})
    flat: string;
    
    @Column({type: DataType.STRING})
    postcode: string;

    
}

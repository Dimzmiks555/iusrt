import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import * as bcrypt from 'bcryptjs'
import { ClientFile } from 'src/client-file/entities/client-file.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Receipt } from 'src/receipt/entities/receipt.entity';

@Injectable()
export class ClientService {


  constructor(

    @InjectModel(Receipt)
    private receiptModel: typeof Receipt

  ){}


  async create(createClientDto) {

    const hashPassword = await bcrypt.hash(createClientDto.password, 5);

    const client = await Client.create({...createClientDto, password: hashPassword})

    return client
  }

  async findAll() {

    const client = await Client.findAndCountAll()

    return client
  }

  async findOne(id: number) {
    const client = await Client.findOne({
      where: {id},
      include: [
        {model: ClientFile}
      ]
    })

    const receipt_debts = await this.receiptModel.findAll({
      where: {
        client_id: client.id,
        status: 'need_payment'
      }
    })

    const receipt_debts_summ = receipt_debts.reduce((prev, now) => {
      
      let debt = now.toJSON()

      return prev + +debt?.summ
    }, 0)

    client.setDataValue('receipt_debts_summ', receipt_debts_summ)


    

    return client
  }

  async getUserByInn(inn: string) {
    const client = await Client.findOne({where: {inn}})

    return client
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}

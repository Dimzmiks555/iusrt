import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class ClientService {
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
    const client = await Client.findOne({where: {id}})

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

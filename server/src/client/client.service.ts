import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  async create(createClientDto: CreateClientDto) {

    const client = await Client.create(createClientDto)

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

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}

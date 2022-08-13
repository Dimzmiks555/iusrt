import { Injectable } from '@nestjs/common';
import { CreateClientFileDto } from './dto/create-client-file.dto';
import { UpdateClientFileDto } from './dto/update-client-file.dto';

@Injectable()
export class ClientFileService {
  create(createClientFileDto: CreateClientFileDto) {
    return 'This action adds a new clientFile';
  }

  findAll() {
    return `This action returns all clientFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientFile`;
  }

  update(id: number, updateClientFileDto: UpdateClientFileDto) {
    return `This action updates a #${id} clientFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientFile`;
  }
}

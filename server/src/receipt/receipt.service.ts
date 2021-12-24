import { Injectable } from '@nestjs/common';
import { Client } from 'src/client/entities/client.entity';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptService {
  create(createReceiptDto, file) {
    const receipt = Receipt.create({
      client_id: createReceiptDto.client_id,
      src: file.filename,
      summ: createReceiptDto.summ,

    })
    return receipt
  }

  findAll() {
    const receipt = Receipt.findAndCountAll({
      include: [
        {model: Client}
      ]
    })
    return receipt
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}

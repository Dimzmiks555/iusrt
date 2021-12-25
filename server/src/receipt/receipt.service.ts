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

  findAll(query) {

    const {client_id} = query

    let options: any = {}

    if (client_id) {options.client_id = client_id}

    const receipt = Receipt.findAndCountAll({
      include: [
        {model: Client}
      ],
      where: options
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

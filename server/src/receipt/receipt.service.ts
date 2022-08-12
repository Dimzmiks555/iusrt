import { Injectable } from '@nestjs/common';
import { Client } from 'src/client/entities/client.entity';
import { ConfirmationDocument } from 'src/confirmation-document/entities/confirmation-document.entity';
import { CreateFileDto } from 'src/file/dto/create-file.dto';
import { File } from 'src/file/entities/file.entity';
import { FileService } from 'src/file/file.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptService {

  constructor(
    private fileService: FileService
  ){}



  async create(createReceiptDto, files: Array<Express.Multer.File>) {
    const receipt = await Receipt.create({
      client_id: createReceiptDto.client_id,
      summ: createReceiptDto.summ,

    })

    console.log(files)

    files.forEach(file => {
      
      let file_data: CreateFileDto = {
        name: file.filename,
        receipt_id: receipt?.id
      }

      this.fileService.create(file_data)
    })




    return receipt
  }

  findAll(query) {

    const {client_id} = query

    let options: any = {}

    if (client_id) {options.client_id = client_id}

    const receipt = Receipt.findAndCountAll({
      include: [
        {model: Client},
        {model: File},
        {model: ConfirmationDocument}
      ],
      order: [['id', 'DESC']],
      where: options
    })
    return receipt
  }

  findOne(id: number) {
    return Receipt.findOne({
      where: {id},
      include: [
        {model: Client},
        {model: File},
        {model: ConfirmationDocument}
      ]
    });
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}

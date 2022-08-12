import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConfirmationDocumentDto } from './dto/create-confirmation-document.dto';
import { UpdateConfirmationDocumentDto } from './dto/update-confirmation-document.dto';
import { ConfirmationDocument } from './entities/confirmation-document.entity';

@Injectable()
export class ConfirmationDocumentService {

  constructor(
    @InjectModel(ConfirmationDocument)
    private confirmationDocumentModel: typeof ConfirmationDocument
  ){}


  create(createConfirmationDocumentDto: CreateConfirmationDocumentDto, files: Array<Express.Multer.File>) {
    console.log(createConfirmationDocumentDto, files)
    files.forEach(file => {
      
      let file_data = {
        name: file.filename,
        receipt_id: createConfirmationDocumentDto?.receipt_id
      }

      this.confirmationDocumentModel.create(file_data)
    })


    return 'This action adds a new confirmationDocument';
  }

  findAll() {
    return this.confirmationDocumentModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} confirmationDocument`;
  }

  update(id: number, updateConfirmationDocumentDto: UpdateConfirmationDocumentDto) {
    return `This action updates a #${id} confirmationDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} confirmationDocument`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClientFileDto } from './dto/create-client-file.dto';
import { UpdateClientFileDto } from './dto/update-client-file.dto';
import { ClientFile } from './entities/client-file.entity';

@Injectable()
export class ClientFileService {

  constructor(
    @InjectModel(ClientFile)
    private clientModel: typeof ClientFile
  ){}


  create(createClientFileDto: CreateClientFileDto, files: Array<Express.Multer.File>) {

    

    console.log(createClientFileDto.fileNames)



    files.forEach((file: Express.Multer.File) => {

      createClientFileDto.fileNames = JSON.parse(createClientFileDto.fileNames)
      


      let clientfile_data = {
        name: createClientFileDto.fileNames.find(item => file?.filename.search(item.filename) !== -1)?.name,
        filename: file.filename,
        client_id: createClientFileDto?.client_id
      }

      this.clientModel.create(clientfile_data)
    })




    return {status: 'ok'};
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
    return this.clientModel.destroy({
      where: {id}
    });
  }
}

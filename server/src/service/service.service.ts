import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from 'src/client/entities/client.entity';
import { ConfirmationDocument } from 'src/confirmation-document/entities/confirmation-document.entity';
import { CreateFileDto } from 'src/file/dto/create-file.dto';
import { File } from 'src/file/entities/file.entity';
import { FileService } from 'src/file/file.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {

  constructor(
    @InjectModel(Service)
    private serviceModel: typeof Service,

    private fileService: FileService
  ){}


  async create(createServiceDto: CreateServiceDto, files: Express.Multer.File[]) {

    const service = await this.serviceModel.create({
      client_id: createServiceDto.client_id,
      summ: createServiceDto.summ,
      comment: createServiceDto.comment,
      subtitle: createServiceDto.subtitle,

    })

    console.log(files)

    files.forEach(file => {
      
      let file_data: CreateFileDto = {
        name: file.filename,
        service_id: service?.id
      }

      this.fileService.create(file_data)
    })
    

    return service;
  }

  findAll(query) {
    return this.serviceModel.findAndCountAll({
      where: query,
      include: [
        {model: File},
        {model: Client},
        {model: ConfirmationDocument}
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

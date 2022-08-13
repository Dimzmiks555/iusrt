import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {

  constructor(
    @InjectModel(Service)
    private serviceModel: typeof Service
  ){}


  async create(createServiceDto: CreateServiceDto) {

    const service = this.serviceModel.create(createServiceDto)

    return service;
  }

  findAll(query) {
    return this.serviceModel.findAll({
      where: query
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

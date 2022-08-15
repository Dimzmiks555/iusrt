import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 20 , {
    limits: {
      fileSize: 1000000000000
    },
    storage: diskStorage({
      destination: './receipts'
      , filename: (req, file, cb) => {
        console.log(file.filename)
        let date: Date = new Date()
        // Generating a 32 random chars long string
        // const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${date.valueOf()}-${file.originalname}`)
      }
    })
  }))

  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto, files);
  }

  @Get()
  findAll(@Query() query) {
    return this.serviceService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}

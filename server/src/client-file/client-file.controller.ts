import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ClientFileService } from './client-file.service';
import { CreateClientFileDto } from './dto/create-client-file.dto';
import { UpdateClientFileDto } from './dto/update-client-file.dto';

@Controller('client-file')
export class ClientFileController {
  constructor(private readonly clientFileService: ClientFileService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 20 , {
    limits: {
      fileSize: 1000000000000
    },
    storage: diskStorage({
      destination: './receipts'
      , filename: (req, file, cb) => {
        let date: Date = new Date()
        // Generating a 32 random chars long string
        // const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${date.valueOf()}-${file.originalname}`)
      }
    })
  }))
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createClientFileDto: CreateClientFileDto) {
    return this.clientFileService.create(createClientFileDto, files);
  }

  @Get()
  findAll() {
    return this.clientFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientFileDto: UpdateClientFileDto) {
    return this.clientFileService.update(+id, updateClientFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientFileService.remove(+id);
  }
}

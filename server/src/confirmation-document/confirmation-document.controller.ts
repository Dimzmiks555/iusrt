import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfirmationDocumentService } from './confirmation-document.service';
import { CreateConfirmationDocumentDto } from './dto/create-confirmation-document.dto';
import { UpdateConfirmationDocumentDto } from './dto/update-confirmation-document.dto';

@Controller('confirmation-document')
export class ConfirmationDocumentController {
  constructor(private readonly confirmationDocumentService: ConfirmationDocumentService) {}

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
  create(@UploadedFiles() files: Array<Express.Multer.File>,@Body() createConfirmationDocumentDto: CreateConfirmationDocumentDto) {
    return this.confirmationDocumentService.create(createConfirmationDocumentDto, files);
  }

  @Get()
  findAll() {
    return this.confirmationDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confirmationDocumentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfirmationDocumentDto: UpdateConfirmationDocumentDto) {
    return this.confirmationDocumentService.update(+id, updateConfirmationDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confirmationDocumentService.remove(+id);
  }
}

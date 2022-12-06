import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, Req, UploadedFiles } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

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
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createReceiptDto: CreateReceiptDto) {
    console.log(files)
    return this.receiptService.create(createReceiptDto, files);
  }

  @Get()
  findAll(@Query() query) {
    return this.receiptService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receiptService.update(+id, updateReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptService.remove(+id);
  }
}

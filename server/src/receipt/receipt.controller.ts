import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, Req } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    limits: {
      fileSize: 1000000000000
    },
    storage: diskStorage({
      destination: './receipts'
      , filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  create(@UploadedFile() file: Express.Multer.File, @Body() createReceiptDto: CreateReceiptDto) {
    console.log(file)
    return this.receiptService.create(createReceiptDto, file);
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

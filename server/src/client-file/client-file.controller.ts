import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientFileService } from './client-file.service';
import { CreateClientFileDto } from './dto/create-client-file.dto';
import { UpdateClientFileDto } from './dto/update-client-file.dto';

@Controller('client-file')
export class ClientFileController {
  constructor(private readonly clientFileService: ClientFileService) {}

  @Post()
  create(@Body() createClientFileDto: CreateClientFileDto) {
    return this.clientFileService.create(createClientFileDto);
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

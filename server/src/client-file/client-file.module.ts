import { Module } from '@nestjs/common';
import { ClientFileService } from './client-file.service';
import { ClientFileController } from './client-file.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientFile } from './entities/client-file.entity';

@Module({
  imports: [SequelizeModule.forFeature([ClientFile])],
  controllers: [ClientFileController],
  providers: [ClientFileService]
})
export class ClientFileModule {}

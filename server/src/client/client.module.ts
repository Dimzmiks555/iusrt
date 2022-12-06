import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Receipt } from 'src/receipt/entities/receipt.entity';
import { Service } from 'src/service/entities/service.entity';

@Module({
  imports: [SequelizeModule.forFeature([Receipt, Service])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule {}

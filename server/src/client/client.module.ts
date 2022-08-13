import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Receipt } from 'src/receipt/entities/receipt.entity';

@Module({
  imports: [SequelizeModule.forFeature([Receipt])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule {}

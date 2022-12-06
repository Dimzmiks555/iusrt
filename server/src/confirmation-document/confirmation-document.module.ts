import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ConfirmationDocumentService } from './confirmation-document.service';
import { ConfirmationDocumentController } from './confirmation-document.controller';
import { ConfirmationDocument } from './entities/confirmation-document.entity';

@Module({
  imports: [SequelizeModule.forFeature([ConfirmationDocument])],
  controllers: [ConfirmationDocumentController],
  providers: [ConfirmationDocumentService]
})
export class ConfirmationDocumentModule {}

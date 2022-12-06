import { PartialType } from '@nestjs/mapped-types';
import { CreateConfirmationDocumentDto } from './create-confirmation-document.dto';

export class UpdateConfirmationDocumentDto extends PartialType(CreateConfirmationDocumentDto) {}

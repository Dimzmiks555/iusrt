import { PartialType } from '@nestjs/mapped-types';
import { CreateClientFileDto } from './create-client-file.dto';

export class UpdateClientFileDto extends PartialType(CreateClientFileDto) {}

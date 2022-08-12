import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { File } from './entities/file.entity';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService]
})
export class FileModule {}

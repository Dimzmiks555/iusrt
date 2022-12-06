import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { Service } from './entities/service.entity';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [FileModule, SequelizeModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}

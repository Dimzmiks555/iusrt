import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ReceiptModule } from './receipt/receipt.module';
import { PaymentModule } from './payment/payment.module';
import { ReportModule } from './report/report.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './client/entities/client.entity';
import { Receipt } from './receipt/entities/receipt.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { File } from './file/entities/file.entity';
import { ConfirmationDocumentModule } from './confirmation-document/confirmation-document.module';
import { ConfirmationDocument } from './confirmation-document/entities/confirmation-document.entity';
import { ServiceModule } from './service/service.module';
import { ClientFileModule } from './client-file/client-file.module';
import { ClientFile } from './client-file/entities/client-file.entity';
import { Service } from './service/entities/service.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'accounting',
      models: [Client, Receipt, File, ConfirmationDocument, ClientFile, Service],
      // synchronize: true,
      // autoLoadModels: true,
      // sync: {alter: true}
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'receipts'),
    }),
    ClientModule, 
    ReceiptModule, 
    PaymentModule, 
    ReportModule, AuthModule, FileModule, ConfirmationDocumentModule, ServiceModule, ClientFileModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

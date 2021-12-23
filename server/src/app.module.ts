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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'accounting',
      models: [Client, Receipt],
      synchronize: true,
      autoLoadModels: true,
      sync: {alter: true}
    }),
    ClientModule, 
    ReceiptModule, 
    PaymentModule, 
    ReportModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

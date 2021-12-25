import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientService } from 'src/client/client.service';
import { ClientModule } from 'src/client/client.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientModule,
    JwtModule.register({
      secret: 'iusrt'
    })
  ]
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

  constructor(private clientService: ClientService,
              private jwtService: JwtService) {

  }

  async login(createAuthDto: CreateAuthDto) {

    const client = await this.validateClient(createAuthDto)

    if (client != false) {
      return this.generateToken(client)
    } else {
      return false
    }
  }

  private async generateToken(client) {
    const payload = {id: client.id, first_name: client.first_name, last_name: client.last_name, sur_name: client.sur_name, }

    return {
      token: this.jwtService.sign(payload)
    }

  }

  private async validateClient(clientDto) {
    const client = await this.clientService.getUserByInn(clientDto.inn)
    console.log(clientDto, client)
    const passwordEquals = await bcrypt.compare(clientDto.password, client.password)

    if (client && passwordEquals) {
      return client
    } else {
      return false
    }

  }
}

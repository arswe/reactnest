import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async login(user: User, response: Response) {
    const expiresIn = new Date();
    expiresIn.setSeconds(
      expiresIn.getSeconds() + this.configService.getOrThrow('JWT_EXPIRATION'),
    );
  }
}

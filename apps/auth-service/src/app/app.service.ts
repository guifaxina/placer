import { Injectable } from '@nestjs/common';
import { LoginCredentialsDto } from '@repo/shared';

@Injectable()
export class AppService {
  async login(loginCredentialsDto: LoginCredentialsDto): Promise<boolean> {
    return false;
  }
}

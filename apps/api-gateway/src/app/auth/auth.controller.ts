import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginCredentialsDto } from '../../../../../packages/shared/src/auth/dtos/login-credentials-dto';
import { ServicesTokens } from '@repo/shared';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Patterns } from '@repo/shared';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(ServicesTokens.AUTH_SERVICE)
    private readonly authService: ClientProxy,
  ) {}

  @Post('login')
  async login(@Body() loginCredentialsDto: LoginCredentialsDto) {
    return await lastValueFrom(
      this.authService.send(Patterns.LOGIN, loginCredentialsDto),
    );
  }
}

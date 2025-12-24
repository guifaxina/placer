import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginCredentialsDto, Patterns } from '@repo/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(Patterns.LOGIN)
  async login(
    @Payload() loginCredentialsDto: LoginCredentialsDto,
  ): Promise<boolean> {
    return this.appService.login(loginCredentialsDto);
  }
}

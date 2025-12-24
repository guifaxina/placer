import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './app/auth/auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicesTokens } from '@repo/shared';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ServicesTokens.AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}

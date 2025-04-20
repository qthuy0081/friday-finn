import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FinnModule } from './finn/finn.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    FinnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

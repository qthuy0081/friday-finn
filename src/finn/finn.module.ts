import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FinnController } from './finn.controller';
import { SheetService } from './sheet.service';

@Module({
  imports: [ConfigModule],
  providers: [SheetService],
  controllers: [FinnController],
})
export class FinnModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { Transaction } from './models';

@Controller('finn')
export class FinnController {
  constructor(private readonly sheetService: SheetService) {}
  @Post('transactions')
  async insertTransactions(@Body() body: Transaction) {
    return this.sheetService.insertTransaction(body);
  }
}

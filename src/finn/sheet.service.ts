import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google, sheets_v4 } from 'googleapis';
import { Transaction } from './models';

@Injectable()
export class SheetService {
  private sheet: sheets_v4.Sheets;

  constructor(private configService: ConfigService) {
    const auth = new google.auth.GoogleAuth({
      keyFile: this.configService.get('GOOGLE_CREDENTIALS_PATH'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheet = google.sheets({ version: 'v4', auth });
  }

  async insertTransaction(transaction: Transaction) {
    if (
      !transaction?.date ||
      !transaction?.amount ||
      !transaction?.description ||
      !transaction?.category
    ) {
      throw new BadRequestException('Missing required fields');
    }
    await this.sheet.spreadsheets.values.append({
      spreadsheetId: this.configService.get('GOOGLE_SHEETS_ID'),
      range: 'A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            new Date(transaction.date).toISOString(),
            transaction.amount,
            transaction.description,
            transaction.category,
          ],
        ],
      },
    });
  }

  async appendValues<T>(
    values: T[][],
    range: string,
    valueInputOption: 'RAW' | 'USER_ENTERED' = 'RAW',
  ) {
    await this.sheet.spreadsheets.values.append({
      spreadsheetId: this.configService.get('GOOGLE_SHEETS_ID'),
      range,
      valueInputOption,
      requestBody: {
        values: values,
      },
    });
  }
}

# Finn Assistant

A personal AI financial assistant that helps you track expenses through Telegram and Google Sheets.

## Overview

Finn Assistant is a simple yet powerful system that allows you to track your expenses naturally through conversation. Just send a message to the Telegram bot about your purchase, and the system will automatically record it in your Google Sheets spreadsheet.

## Architecture

```
[User] <---> [Telegram Bot] <---> [TypeScript Backend (NestJS)] <---> [Grok API]
                                               |
                                               |
                                               v
                                    [Google Sheets API] <---> [Expense Spreadsheet]
```

## Technology Stack

- **Frontend**: Telegram Bot interface
- **Backend**: TypeScript with NestJS framework
- **AI Service**: Grok API for natural language processing
- **Data Storage**: Google Sheets
- **Deployment**: Node.js environment

## Components

### Telegram Bot
- User interaction point
- Receives natural language input about expenses
- Sends confirmations after processing

### TypeScript Backend with NestJS
- Modular, scalable architecture
- Strong typing for reliable code
- Dependency injection
- Processes incoming messages
- Manages authentication
- Coordinates data flow

### Grok AI Service
- Advanced natural language understanding
- Parses expense inputs
- Extracts key information:
  - Expense amount
  - Category
  - Date
  - Additional notes
- Structures data for storage

### Google Sheets Integration
- Stores all financial data
- Organizes expenses by category
- Provides built-in calculation and visualization tools
- Accessible from any device

## How It Works

1. You send a message to the Telegram bot like "I bought a cinema ticket for $20"
2. The TypeScript backend forwards this to Grok API for processing
3. Grok extracts structured data from your message
4. The system adds a new row to your Google Sheets with:
   - Date: Current date
   - Category: Entertainment
   - Amount: $20
   - Description: Cinema ticket
5. The bot confirms the expense has been recorded

## Setup Requirements

- Telegram account
- Google account (for Google Sheets)
- Node.js environment for hosting the NestJS backend
- Grok API access and credentials
- Google Sheets API credentials

## Development

The project uses TypeScript for type safety and better developer experience. The NestJS framework provides a robust foundation for building scalable and maintainable backend services.

## Future Enhancements

- Budget alerts when spending thresholds are reached
- Monthly expense reports
- Category spending insights
- Receipt image processing
- Multi-currency support

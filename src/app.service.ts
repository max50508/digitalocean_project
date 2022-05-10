import { Injectable } from '@nestjs/common';

// import client from './config/client';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

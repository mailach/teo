import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEvents() {
    return { title: 'Hello World!', date: '01.01.2020', max: 10 };
  }
}

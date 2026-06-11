import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Welcome to VisualDSA API', version: '0.0.0' };
  }
}

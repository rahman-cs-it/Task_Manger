import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ping')
  getPing() {
    return { message: 'pong' };
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}

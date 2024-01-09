import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/guards';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor() {}
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return {
      msg: 'Google Auth',
    };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  redirect() {
    return { msg: 'OK' };
  }
}

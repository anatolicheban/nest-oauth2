import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    super({
      clientID:
        '70902444892-p3cpjbmbdglt40fbq7t84j823dttml53.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.authService.validate({
      email: profile._json.email,
      displayName: profile.displayName,
    });

    return user || null;
  }
}

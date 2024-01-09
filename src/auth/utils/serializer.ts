import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '../../mongo/user.schema';

export class SessionSerializer extends PassportSerializer {
  constructor(private authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: Function): any {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function): Promise<any> {
    const user = await this.authService.findUser(payload.id);
    return done(null, user || null);
  }
}

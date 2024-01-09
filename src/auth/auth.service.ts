import { UserDetails } from '../utils/types';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../mongo/user.schema';
import { Model } from 'mongoose';

// @Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}
  async validate(details: UserDetails) {
    const user = await this.user.findOne({ email: details.email });
    if (user) return user;
    return await this.user.create(details);
  }

  async findUser(id: string) {
    const user = await this.user.findById(id);
    return user;
  }
}

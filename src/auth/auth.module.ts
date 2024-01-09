import { Get, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from '../mongo/user.schema';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/google.strategy';
import { SessionSerializer } from './utils/serializer';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, SessionSerializer],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
})
export class AuthModule {}

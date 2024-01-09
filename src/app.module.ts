import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(__dirname, '../.env'),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory(cfg: ConfigService) {
        return { uri: cfg.get('MONGODB_URI') };
      },
    }),
  ],
})
export class AppModule {}

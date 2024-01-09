import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  displayName: string;
}

export const userSchema = SchemaFactory.createForClass(User);

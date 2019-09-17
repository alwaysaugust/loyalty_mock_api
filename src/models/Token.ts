// External Dependancies
import { prop, Typegoose } from "@hasezoey/typegoose";
class TokenModel extends Typegoose {
  @prop()
  public address: string;
  @prop()
  public symbol: string;
  @prop()
  public name: string;
  @prop()
  public supply: number;
  @prop()
  public owner: string;
}

export const Token = new TokenModel().getModelForClass(TokenModel);

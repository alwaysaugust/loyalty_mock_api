import * as Accounts from "aion-keystore";
import * as Web3 from "aion-web3";
import { IAccountManagement } from "../IAccountManagement";

export class AccountManagement implements IAccountManagement {
  public registerAdmin(id: string): boolean {
    return true;
  }
  public registerUser(id: string): boolean {
    return true;
  }
  public generatePK(): { publicKey: string; privateKey: string } {
    return new Accounts().create();
  }
  public changeAllowance(amount: number): boolean {
    return true;
  }
}

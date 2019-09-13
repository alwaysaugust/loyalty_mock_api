import { ITokenManagement } from "../ITokenManagement";
import { deploy } from "./utils/TokenDeployer";
export class TokenManagement implements ITokenManagement {
  public async createNew(
    adminKey: string,
    symbol: string,
    name: string,
    supply: number
  ): Promise<string> {
    const hash: string | boolean = await deploy(adminKey, name, symbol, supply);
    if ((hash as string) !== undefined) {
      return hash as string;
    } else {
      throw new Error("Could not deploy token");
    }
  }
  // public getToken() {} // todo
  public updateSupply(supply: number): boolean {
    return true;
  }
}

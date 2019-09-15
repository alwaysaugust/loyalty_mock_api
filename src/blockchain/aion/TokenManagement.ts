import { ITokenManagement } from "../ITokenManagement";
import { deploy } from "./utils/TokenDeployer";
export class TokenManagement implements ITokenManagement {
  public async createNew(
    adminKey: string,
    symbol: string,
    name: string,
    supply: number
  ): Promise<{ contractAddress: string; contractOwner: string }> {
    const data:
      | { contractAddress: string; contractOwner: string }
      | boolean = await deploy(adminKey, name, symbol, supply);
    if (
      (data as { contractAddress: string; contractOwner: string }) !== undefined
    ) {
      return data as { contractAddress: string; contractOwner: string };
    } else {
      throw new Error("Could not deploy token");
    }
  }
  // public getToken() {} // todo
  public updateSupply(supply: number): boolean {
    return true;
  }
}

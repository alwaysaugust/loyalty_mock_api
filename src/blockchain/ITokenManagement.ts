export interface ITokenManagement {
  createNew(
    adminKey: string,
    symbol: string,
    name: string,
    supply: number
  ): Promise<{ contractAddress: string; contractOwner: string }>;
  updateSupply(supply: number): boolean;
}

export interface ITokenManagement {
  createNew(
    adminKey: string,
    symbol: string,
    name: string,
    supply: number
  ): Promise<string>;
  updateSupply(supply: number): boolean;
}

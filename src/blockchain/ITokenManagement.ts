interface ITokenManagement {
  createNew: (symbol: string, name: string, supply: number) => string; //mintable/non mintable
  updateSupply: (supply: number) => void;
}

export interface IAccountManagement {
  registerAdmin: (id: string) => boolean;
  registerUser: (id: string) => boolean;
  generatePK: () => { publicKey: string; privateKey: string };
  changeAllowance: (amount: number) => boolean;
}

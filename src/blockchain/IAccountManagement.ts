interface IAccountManagement {
  registerAdmin: (id: string) => boolean;
  registerUser: (id: string) => boolean;
  generatePK: () => string;
  changeAllowance: (amount: number) => void;
}

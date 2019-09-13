import { config } from "../config/server";
import { AccountManagement } from "./aion/AccountManagement";
import { TokenManagement } from "./aion/TokenManagement";
import { IAccountManagement } from "./IAccountManagement";
import { ITokenManagement } from "./ITokenManagement";

export function getTokenModule(): ITokenManagement {
  if (config.blockchain === "aion") {
    return new TokenManagement();
  }
}
export function getAccountModule(): IAccountManagement {
  if (config.blockchain === "aion") {
    return new AccountManagement();
  }
}

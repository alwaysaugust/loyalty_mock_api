// External Dependancies
import boom = require("boom");
import { IAccountManagement } from "../blockchain/IAccountManagement";
import * as ModuleProvider from "../blockchain/ModuleProvider";
const accountModule: IAccountManagement = ModuleProvider.getAccountModule();

// Add a new account
export async function addAccount(req, reply): Promise<object> {
  try {
    // todo
    // username
    // password
    return {};
  } catch (err) {
    throw boom.boomify(err);
  }
}
export async function getKeyPair(req, reply): Promise<object> {
  try {
    const account = accountModule.generatePK();
    return { publicKey: account.publicKey, privateKey: account.privateKey };
  } catch (err) {
    throw boom.boomify(err);
  }
}

export async function transfer(req, reply): Promise<object> {
  return { todo: "todo" };
}
export async function history(req, reply): Promise<object> {
  return { todo: "todo" };
}
export async function hook(req, reply): Promise<object> {
  return { todo: "todo" };
}

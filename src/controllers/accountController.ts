// External Dependancies
import boom = require("boom");
import { IAccountManagement } from "../blockchain/IAccountManagement";
import * as ModuleProvider from "../blockchain/ModuleProvider";
const accountModule: IAccountManagement = ModuleProvider.getAccountModule();

// Add a new account
export async function addAccount(req, reply): Promise<object> {
  try {
    // todo
    return {};
  } catch (err) {
    throw boom.boomify(err);
  }
}

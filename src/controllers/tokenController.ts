// External Dependancies
import boom = require("boom");
import { ITokenManagement } from "../blockchain/ITokenManagement";
import * as ModuleProvider from "../blockchain/ModuleProvider"; // Get Data Models
import { Token } from "../models/Token";
const tokenModule: ITokenManagement = ModuleProvider.getTokenModule();

// Get all tokens
export async function getTokens(req, reply): Promise<object> {
  // tslint:disable-next-line: no-console
  console.log(req.params);
  try {
    // const tokens = await Token.find();
    const tokens = [
      {
        address: "0x",
        symbol: "abc",
        name: "ABC",
        balance: 0,
        owner: "0x"
      }
    ];
    await new Promise(r => {
      setTimeout(r, 1000);
    });
    return { blah: "test" };
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single token by ID
export async function getSingleToken(req, reply): Promise<object> {
  try {
    const owner = req.params.owner;
    const token = await Token.findOne({ owner });
    if (token) {
      return token;
    } else {
      throw Error("No tokens for owner");
    }
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Add a new token
export async function addToken(req, reply): Promise<object> {
  try {
    // const token = new Token(req.body);
    // // tslint:disable-next-line: no-console
    // console.log(req.body);
    // // tslint:disable-next-line: no-console
    // console.log(token);
    // const data = await tokenModule.createNew(
    //   req.body.signingKey,
    //   token.symbol,
    //   token.name,
    //   token.supply
    // ); // todo add types
    // token.address = data.contractAddress;
    // token.owner = data.contractOwner;
    await new Promise(res => setTimeout(res, 1000));
    return { status: true };
    // return token.save();
  } catch (err) {
    throw boom.boomify(err);
  }
}

// External Dependancies
import boom = require("boom");
import { ITokenManagement } from "../blockchain/ITokenManagement";
import * as ModuleProvider from "../blockchain/ModuleProvider"; // Get Data Models
import Token = require("../models/Token");
const tokenModule: ITokenManagement = ModuleProvider.getTokenModule();

// Get all tokens
export async function getTokens(req, reply): Promise<object> {
  try {
    const tokens = await Token.find();
    return tokens;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single token by ID
export async function getSingleToken(req, reply): Promise<object> {
  try {
    const id = req.params.id;
    const token = await Token.findById(id);
    return token;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Add a new token
export async function addToken(req, reply): Promise<object> {
  try {
    const token = new Token(req.body);
    const hash = await tokenModule.createNew("", "", "", 0); // todo add types
    return token.save();
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Update an existing token
export async function updateToken(req, reply): Promise<object> {
  try {
    const id = req.params.id;
    const token = req.body;
    const { ...updateData } = token;
    const update = await Token.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
}

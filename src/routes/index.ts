// Import our Controllers
import { RouteOptions } from "fastify";
import {
  getKeyPair,
  history,
  hook,
  transfer
} from "../controllers/accountController";
import {
  addToken,
  getSingleToken,
  getTokens
} from "../controllers/tokenController";
import * as accountDocs from "./documentation/accountApi";
import * as tokenDocs from "./documentation/tokenApi";

export let routes: RouteOptions[] = [
  {
    method: "POST",
    url: "/api/tokens/new",
    handler: addToken,
    schema: tokenDocs.addTokenSchema
  },
  {
    method: "GET",
    url: "/api/tokens/:account",
    handler: getTokens,
    schema: tokenDocs.getTokenWithParamsSchema
  },
  {
    method: "GET",
    url: "/api/accounts/new",
    handler: getKeyPair,
    schema: accountDocs.getKeyPair
  },
  {
    method: "POST",
    url: "/api/accounts/transfer",
    handler: transfer,
    schema: accountDocs.transfer
  },
  {
    method: "GET",
    url: "/api/accounts/history/:account",
    handler: history,
    schema: accountDocs.history
  },
  {
    method: "POST",
    url: "/api/accounts/transferHook",
    handler: hook,
    schema: accountDocs.hook
  }
];

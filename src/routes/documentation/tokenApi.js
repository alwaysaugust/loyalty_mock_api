const { hookModel } = require("./commonApi");

const tokenModelSchemaResponse = {
  address: { type: "string" },
  symbol: { type: "string" },
  name: { type: "string" },
  supply: { type: "number" },
  owner: { type: "string" }
};
const newTokenModelSchemaRequest = {
  symbol: { type: "string" },
  name: { type: "string" },
  supply: { type: "number" },
  hook: { type: "object", properties: hookModel },
  signingKey: { type: "string" }
};
const successResponse = {
  status: { type: "boolean" }
};
exports.addTokenSchema = {
  description: "Creates new token with given values",
  tags: ["tokens"],
  summary: "Create a new token",
  body: {
    type: "object",
    properties: newTokenModelSchemaRequest
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: successResponse
    }
  }
};

exports.getTokenWithParamsSchema = {
  description: "Returns a balance of tokens and details on each token.",
  tags: ["tokens"],
  summary: "Get tokens for account",
  params: {
    type: "object",
    properties: {
      account: {
        type: "string",
        description: "Account address for which show token details"
      }
    }
  }
};

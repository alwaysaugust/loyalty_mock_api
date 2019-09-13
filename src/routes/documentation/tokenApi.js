const tokenModelSchemaResponse = {
  _id: { type: "string" },
  address: { type: "string" },
  symbol: { type: "string" },
  name: { type: "string" },
  supply: { type: "number" },
  owner: { type: "string" },
  __v: { type: "number" }
};
const newTokenModelSchemaRequest = {
  address: { type: "string" },
  symbol: { type: "string" },
  name: { type: "string" },
  supply: { type: "number" },
  owner: { type: "string" }
};
exports.addTokenSchema = {
  description: "Create a new token",
  tags: ["tokens"],
  summary: "Creates new token with given values",
  body: {
    type: "object",
    properties: newTokenModelSchemaRequest
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: tokenModelSchemaResponse
    }
  }
};
exports.updateTokenSchema = {
  description: "Create a new token",
  tags: ["tokens"],
  summary: "Creates new token with given values",
  params: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "token id"
      }
    }
  },
  body: {
    type: "object",
    properties: newTokenModelSchemaRequest
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: tokenModelSchemaResponse
    }
  }
};
exports.getTokenWithParamsSchema = {
  description: "Get token",
  tags: ["tokens"],
  summary: "Fetches a token with provided id",
  params: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "token id"
      }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: tokenModelSchemaResponse
    }
  }
};
exports.getTokensSchema = {
  description: "Get tokens",
  tags: ["tokens"],
  summary: "Fetches all tokens"
};

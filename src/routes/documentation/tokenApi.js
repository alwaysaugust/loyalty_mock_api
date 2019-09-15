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
  symbol: { type: "string" },
  name: { type: "string" },
  supply: { type: "number" },
  signingKey: { type: "string" }
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

exports.getTokenWithParamsSchema = {
  description: "Get token",
  tags: ["tokens"],
  summary: "Fetches a token with provided id",
  params: {
    type: "object",
    properties: {
      owner: {
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

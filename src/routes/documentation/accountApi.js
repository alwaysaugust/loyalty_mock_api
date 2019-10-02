const { hookModel } = require("./commonApi");
const keySchemaResponse = {
  publicKey: { type: "string" },
  privateKey: { type: "string" }
};
const successResponse = {
  status: { type: "boolean" }
};

const historyResponse = {
  timeStamp: { type: "string" },
  metaData: { type: "string" },
  recipient: { type: "string" },
  amount: { type: "number" }
};

exports.getKeyPair = {
  description:
    "Generates public/private key pair to be used by the applications to track user accounts.",
  tags: ["accounts"],
  summary: "Get account key pair",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: keySchemaResponse
    }
  }
};

exports.transfer = {
  description:
    "Called when user wants to redeem a specific item from a vendor. Or when users (and vendors) want to transfer points. Or when platform assigns users points for steps.",
  tags: ["accounts"],
  summary: "Transfer tokens",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: keySchemaResponse
    }
  }
};

exports.history = {
  description: "Returns the transaction history of a specified account.",
  tags: ["accounts"],
  summary: "Get transaction history",
  params: {
    type: "object",
    properties: {
      account: {
        type: "string",
        description: "Account address for which show history details"
      }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "array",
      items: { type: "object" },
      properties: historyResponse
    }
  }
};

exports.hook = {
  description: "Called when a token transfer is complete.",
  tags: ["accounts"],
  summary: "Register webhook callback",
  body: {
    type: "object",
    properties: hookModel
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: successResponse
    }
  }
};

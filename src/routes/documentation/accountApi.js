const { hookModel } = require("./commonApi");
const keySchemaResponse = {
  publicKey: { type: "string" },
  privateKey: { type: "string" }
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
  summary: "Transfer tokens"
};

exports.history = {
  description: "Returns the transaction history of a specified account.",
  tags: ["accounts"],
  summary: "Get transaction history"
};

exports.hook = {
  description: "Called when a token transfer is complete.",
  tags: ["accounts"],
  summary: "Register webhook callback"
};

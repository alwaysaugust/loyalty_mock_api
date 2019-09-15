const keySchemaResponse = {
  publicKey: { type: "string" },
  privateKey: { type: "string" }
};

exports.getKeyPair = {
  description: "Get account key pair",
  tags: ["accounts"],
  summary: "Generates keypair for account creation",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: keySchemaResponse
    }
  }
};

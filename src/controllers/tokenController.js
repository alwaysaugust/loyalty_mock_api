// External Dependancies
const boom = require("boom");

// Get Data Models
const Token = require("../models/Token");

// Get all tokens
exports.getTokens = async (req, reply) => {
  try {
    const tokens = await Token.find();
    return tokens;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single token by ID
exports.getSingleToken = async (req, reply) => {
  try {
    const id = req.params.id;
    const token = await Token.findById(id);
    return token;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new token
exports.addToken = async (req, reply) => {
  try {
    const token = new Token(req.body);
    return token.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing token
exports.updateToken = async (req, reply) => {
  try {
    const id = req.params.id;
    const token = req.body;
    const { ...updateData } = token;
    const update = await Token.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a token
exports.deleteToken = async (req, reply) => {
  try {
    const id = req.params.id;
    const token = await Token.findByIdAndRemove(id);
    return token;
  } catch (err) {
    throw boom.boomify(err);
  }
};

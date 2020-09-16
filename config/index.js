module.exports = {
  port: process.env.PORT || 3000,
  mongo_uri:
    process.env.MONGO_URI ||
    "mongodb+srv://jeeyoung:2MiKwios6wxi3aYm@jeestagram.kxaya.mongodb.net/jeestagram?retryWrites=true&w=majority",
  secret: process.env.SECRET || "JeeStagram",
};

const { MongoMemoryServer } = require("mongodb-memory-server");

module.exports = async () => {
  const database = await MongoMemoryServer.create();
  global.__TEST_DATABASE__ = database;
  process.env.MONGODB_URL = database.getUri("task-manager-test");
};

module.exports = async () => {
  await global.__TEST_DATABASE__.stop();
};

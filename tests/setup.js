jest.mock("@sendgrid/mail", () => ({
  setApiKey: jest.fn(),
  send: jest.fn().mockResolvedValue([]),
}));

afterAll(async () => {
  await require("mongoose").disconnect();
});

const Code = require("@hapi/code");
const Lab = require("@hapi/lab");

const getServer = require("../get-server");

const { expect } = Code;
const { it, describe, before } = (exports.lab = Lab.script());

describe("GET /", () => {
  before(async ({ context }) => {
    context.server = await getServer();

    await context.server.initialize();
  });

  it("responds with 401 when no credentials provided", async ({ context }) => {
    const res = await context.server.inject({
      method: "GET",
      url: `/some-path`,
    });

    expect(res.statusCode).to.equal(401);
  });
});

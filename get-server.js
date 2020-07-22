const hapi = require("@hapi/hapi");

module.exports = async () => {
  const server = hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register(require("@hapi/basic"));

  server.auth.strategy("simple", "basic", {
    validate: () => ({ isValid: true, credentials: {} }),
  });

  server.route({
    path: "/some-path",
    method: "GET",
    handler: (request, h) => "hello world",
    config: {
      auth: {
        strategy: "simple",
      },
    },
  });

  return server;
};

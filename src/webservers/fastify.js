import fp from "fastify-plugin";
import FastifyBodyParser from "fastify-formbody";
import { init } from "../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../utilities/index.js";

async function fastWorms(server, options, next) {
  options = options || {};
  options.route = options.route ? options.route : defaultRoute;
  await init(options.path);

  if (!server.hasContentTypeParser("application/x-www-form-urlencoded")) {
    server.register(FastifyBodyParser);
  }

  server.post(options.route, (req, res) => {
    requestHandler(req.body, res);
  });

  next();
}

export default fp(await fastWorms, {
  fastify: ">=3",
  name: "fastworms",
});

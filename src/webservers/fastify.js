import FastifyBodyParser from "fastify-formbody";
import { init } from "../integrations/bookworms.js";
import { requestHandler } from "../utilities/index.js";

export default async (server, path, route = defaultRoute) => {
  await init(path);

  server.register((instance, options, next) => {
    instance.register(FastifyBodyParser).post(route, (req, res) => {
      const { body } = req;
      requestHandler(body, res);
    });
    next();
  });
};

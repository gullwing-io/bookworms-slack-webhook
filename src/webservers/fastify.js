import FastifyBodyParser from "fastify-formbody";
import { init } from "../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../utilities/index.js";

export default async (server, path, route = defaultRoute) => {
  await init(path);

  server.register((instance, options, next) => {
    // This is a bit ugly but for now this might work
    // checking to see if Fastify already has FastifyBodyParser
    try {
      instance.register(FastifyBodyParser).post(route, (req, res) => {
        requestHandler(req.body, res);
      });
    } catch (error) {
      server.post(route, (req, res) => {
        requestHandler(req.body, res);
      });
    }
    next();
  });
};

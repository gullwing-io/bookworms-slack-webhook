// import FastifyBodyParser from "fastify-formbody";
import { init } from "../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../utilities/index.js";

export default async (server, path, route = defaultRoute) => {
  await init(path);

  // Because of an issue, raised here:
  // https://github.com/fastify/help/issues/642
  // you currently need to globally have fastify-formbody registered in the server

  // server.register((instance, options, next) => {
  //   // This is a bit ugly but for now this might work
  //   // checking to see if Fastify already has FastifyBodyParser
  //   try {
  //     instance.register(FastifyBodyParser).post(route, (req, res) => {
  //       requestHandler(req.body, res);
  //     });
  //   } catch (error) {
  //     server.post(route, (req, res) => {
  //       requestHandler(req.body, res);
  //     });
  //   }
  //   next();
  // });

  server.post(route, (req, res) => {
    requestHandler(req.body, res);
  });
};

import bodyParser from "body-parser";
import { init } from "../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../utilities/index.js";

export default async (server, options) => {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  options = options || {};
  options.route = options.route ? options.route : defaultRoute;
  await init(options.path);

  server.post(options.route, urlencodedParser, (req, res) => {
    const { body } = req;
    requestHandler(body, res);
  });
};

import bodyParser from "body-parser";
import { init } from "../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../utilities/index.js";

export default async (server, path, route = defaultRoute) => {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  await init(path);

  server.post(route, urlencodedParser, (req, res) => {
    const { body } = req;
    requestHandler(body, res);
  });
};

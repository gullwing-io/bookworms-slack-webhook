import bodyParser from "body-parser";
import { response } from "./src/middlewares/index.js";

export default (path, route = "/webhooks/slack/bookworms") => {
  //   const urlencodedParser = bodyParser.urlencoded({ extended: false });
  //   init(path);
  return (req, res, next) => {
    const { url } = req;
    if (url.includes(route)) {
      res.send("found");
    } else {
      res.send("not found");
    }

    // app.get(route, (request, reply, next) => {
    //   console.log("test");
    //   //   response(request, reply);
    //   reply.send("testing");
    //   next();
    // });
  };
};

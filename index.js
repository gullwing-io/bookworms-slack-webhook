import bodyParser from "body-parser";
import { init } from "./src/bookworms";

export default async (route = "/webhooks/slack/bookworms", path) => {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  init(path);
  return (app, options) => {
    app.post(route, urlencodedParser, (request, reply, next) => {
      if (!path) {
        reply.send(`No bookmarks found`);
      } else {
        const { body } = request;
        if (body?.text === "" || body?.text.toLowerCase() === "all") {
          reply.send(sendBookmarkCommands());
        } else {
          reply.send(sendBookMarks(body.text));
        }
      }
      next();
    });
  };
};

import { init } from "./src/bookworms";

export default async (route = "/webhooks/slack/bookworms", path) => {
  init(path);
  return (app, options) => {
    app.get(route, (request, reply, next) => {
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

import { sendBookMarks, sendBookmarkCommands } from "../integrations/slack.js";

const defaultRoute = "/webhooks/slack/bookworms";

const requestHandler = (body, res) => {
  if (
    body?.text === undefined ||
    body?.text === "" ||
    body?.text?.toLowerCase() === "all"
  ) {
    res.send(sendBookmarkCommands());
  } else {
    res.send(sendBookMarks(body.text));
  }
};

export { requestHandler, defaultRoute };

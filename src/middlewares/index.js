import { sendBookMarks, sendBookmarkCommands } from "../integrations/slack.js";
const response = (request, reply) => {
  const { body } = request;
  if (body?.text === "" || body?.text.toLowerCase() === "all") {
    reply.send(sendBookmarkCommands());
  } else {
    reply.send(sendBookMarks(body.text));
  }
};

export { response };

import slackifyMarkdown from "slackify-markdown";
import { getBookmarks, listOfBookmarksMarkDown } from "./bookworms.js";

const headerForSlackMessage = (title) => {
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: title,
      },
    },
    {
      type: "divider",
    },
  ];
};

const sendBookmarkCommands = () => {
  return {
    blocks: [
      ...headerForSlackMessage("Bookmarks"),
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: slackifyMarkdown(listOfBookmarksMarkDown()),
        },
      },
    ],
  };
};

const sendBookMarks = (text) => {
  return {
    blocks: [
      ...headerForSlackMessage("Bookmarks"),
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: slackifyMarkdown(getBookmarks(text)),
        },
      },
    ],
  };
};

export { sendBookMarks, sendBookmarkCommands };

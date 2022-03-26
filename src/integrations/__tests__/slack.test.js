import { jest } from "@jest/globals";
import { init } from "../../integrations/bookworms.js";
import {
  sendBookMarks,
  sendBookmarkCommands,
  headerForSlackMessage,
} from "../slack.js";

// I rather not test against real data but mocks with native imports are causing me issues
await init(
  "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml"
);

describe("Slack", () => {
  describe("headerForSlackMessage", () => {
    test("should return markdown for slack tite", () => {
      expect(headerForSlackMessage("sample tite")).toEqual([
        { text: { text: "sample tite", type: "plain_text" }, type: "header" },
        { type: "divider" },
      ]);
    });
  });
  describe("sendBookmarkCommands", () => {
    test("should return markdown for all commands", () => {
      expect(sendBookmarkCommands()).toMatchSnapshot();
    });
  });
  describe("sendBookMarks", () => {
    test("should return markdown unfound bookmarks", () => {
      expect(sendBookMarks()).toMatchSnapshot();
    });
    test("should return markdown found bookmarks", () => {
      expect(sendBookMarks("folder 1")).toMatchSnapshot();
    });
  });
});

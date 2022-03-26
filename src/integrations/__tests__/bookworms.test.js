import { jest } from "@jest/globals";
import {
  init,
  getBookmarks,
  listOfBookmarksMarkDown,
  findBookMarkFolder,
} from "../../integrations/bookworms.js";

// I rather not test against real data but mocks with native imports are causing me issues
await init(
  "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml"
);

describe("Bookworms", () => {
  describe("getBookmarks", () => {
    test("should return markdown for unfound folder", () => {
      expect(getBookmarks("junk")).toMatchSnapshot();
    });
    test("should return markdown for found folder", () => {
      expect(getBookmarks("folder 1")).toMatchSnapshot();
    });
  });
  describe("listOfBookmarksMarkDown", () => {
    test("should return all folders for commands", () => {
      expect(listOfBookmarksMarkDown()).toMatchSnapshot();
    });
  });
  describe("findBookMarkFolder", () => {
    test("should return found folder", () => {
      expect(
        findBookMarkFolder("folder 1", [
          {
            label: "folder 1",
            description: "This is to describe the sub folder structure",
            bookmarks: [
              {
                label: "sample url 1",
                description: "this is used to describe the bookmark",
                href: "https://www.mywebsite.com",
              },
            ],
          },
        ])
      ).toEqual({
        bookmarks: [
          {
            description: "this is used to describe the bookmark",
            href: "https://www.mywebsite.com",
            label: "sample url 1",
          },
        ],
        description: "This is to describe the sub folder structure",
        label: "folder 1",
      });
    });
    test("should return undefined if folder not found", () => {
      expect(
        findBookMarkFolder("junk", [
          {
            label: "folder 1",
            description: "This is to describe the sub folder structure",
            bookmarks: [
              {
                label: "sample url 1",
                description: "this is used to describe the bookmark",
                href: "https://www.mywebsite.com",
              },
            ],
          },
        ])
      ).toBeUndefined();
    });
  });
});

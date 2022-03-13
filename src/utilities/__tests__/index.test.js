import { jest } from "@jest/globals";
import { init } from "../../integrations/bookworms.js";
import { requestHandler, defaultRoute } from "../index.js";

// I rather not test against real data but mocks with native imports are causing me issues
await init(
  "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml"
);

describe("Utilties", () => {
  describe("requestHandler", () => {
    test("should return valid folder found", () => {
      const body = {
        text: "folder 1",
      };
      const res = {
        send: jest.fn(),
      };
      requestHandler(body, res);
      expect(res.send).toMatchSnapshot();
    });
    test("should return folder not found", () => {
      const body = {
        text: "junk",
      };
      const res = {
        send: jest.fn(),
      };
      requestHandler(body, res);
      expect(res.send).toMatchSnapshot();
    });
  });
  test("should return all bookmarks - no text", () => {
    const body = {};
    const res = {
      send: jest.fn(),
    };
    requestHandler(body, res);
    expect(res.send).toMatchSnapshot();
  });
  test("should return all bookmarks - blank text", () => {
    const body = {
      text: "",
    };
    const res = {
      send: jest.fn(),
    };
    requestHandler(body, res);
    expect(res.send).toMatchSnapshot();
  });
  test("should return all bookmarks - all text", () => {
    const body = {
      text: "",
    };
    const res = {
      send: jest.fn(),
    };
    requestHandler(body, res);
    expect(res.send).toMatchSnapshot();
  });
  describe("defaultRoute", () => {
    test("should return default route", () => {
      expect(defaultRoute).toEqual("/webhooks/slack/bookworms");
    });
  });
});

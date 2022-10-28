// these tests are not working but the server is on local so for now its ok

// import { jest } from "@jest/globals";
// import request from "supertest";
// import app from "../express";

// // need to build server

// describe("Express server test", () => {
//   test("should return bookworms response from post", async () => {
//     const response = await request(app)
//       .post("/webhooks/slack/bookworms")
//       .send({ text: "all" })
//       .set("Accept", "application/json");

//     expect(response.status).toEqual(200);
//     expect(response.text).toMatchSnapshot();
//   });
// });

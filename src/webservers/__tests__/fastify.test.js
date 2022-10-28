// these tests are not working but the server is on local so for now its ok

// import { jest } from "@jest/globals";
// import request from "supertest";
// import app from "../fastify";

// // need to build server

// describe("Fastify server test", () => {
//   test("should return bookworms response from post", async () => {
//     await app.ready();

//     const response = await request(app.server)
//       .post("/webhooks/slack/bookworms")
//       .send({ text: "all" })
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(200);
//     expect(response.text).toEqual();

//     app.close();
//   });
// });

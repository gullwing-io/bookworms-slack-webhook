import express from "express";
import { expressWorms } from "../../index.js";
const app = express();
const port = 3000;

await expressWorms(
  app,
  "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml"
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example Express app listening on port ${port}`);
});

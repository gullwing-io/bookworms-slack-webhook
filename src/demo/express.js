import express from "express";
// including to see if we can handle if already added
import bodyParser from "body-parser";
import { expressWorms } from "../../index.js";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

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

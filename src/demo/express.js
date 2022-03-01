import express from "express";
import bookwormsSlackWebhook from "../../index.js";
const app = express();
const port = 3000;

app.use(
  bookwormsSlackWebhook(
    "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml"
  )
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example Express app listening on port ${port}`);
});

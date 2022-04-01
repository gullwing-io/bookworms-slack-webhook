import Fastify from "fastify";
import { fastWorms } from "../../index.js";
const app = Fastify();
const port = 4000;

app.register(fastWorms, {
  path: "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml",
});

app.get("/", (request, reply) => {
  reply.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example Fastify app listening on port ${port}`);
});

export default app;

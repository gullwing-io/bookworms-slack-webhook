import Fastify from "fastify";
// including to see if we can handle if already added
import fastifyForm from "fastify-formbody";
import { fastWorms } from "../../index.js";
const app = Fastify();
const port = 3000;

app.register(fastifyForm);
app.register(fastWorms, {
  path: "https://raw.githubusercontent.com/thearegee/bookworms/main/demo/config/bookmarks.yaml",
});

app.get("/", (request, reply) => {
  reply.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example Fastify app listening on port ${port}`);
});

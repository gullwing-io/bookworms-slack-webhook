import Fastify from "fastify";
const app = Fastify();
const port = 3000;

app.get("/", (request, reply) => {
  reply.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example Fastify app listening on port ${port}`);
});

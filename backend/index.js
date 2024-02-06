import express from "express";
import cors from "cors";
import { Server } from "socket.io";
const app = express();
const port = 5000;
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));
const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

const io = new Server(server, { cors: "*" });

io.on("connection", (socket) => {
  console.log(socket);
});

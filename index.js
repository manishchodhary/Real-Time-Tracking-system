import express from "express";
import { config } from "dotenv";
import { Server } from "socket.io";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  socket.on("send-location", function (data) {
    io.emit("receive-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", function () {
    io.emit("user-disconnected", socket.id);
  });
  console.log("connected");
});

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () => {
  console.log("Server is runing on port number ", PORT);
});

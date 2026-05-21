import express from "express";
import { config } from "dotenv";
import socketio from "socket.io";
import http from "http";
import path from "path";

config();
 
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")))

const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

server.listen(PORT, () => {
  console.log("Server is runing on port number ", PORT);
});

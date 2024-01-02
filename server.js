const express = require("express");
const http = require("http"); // we dont need to do npm i http bcz it is already present inside the node module file

//after npm i socket.io
const socketIo = require("socket.io");

const serverClass = socketIo.Server;
// here i m taking serverClass from socketIo object

const expressServer = express();
// my server is a purer express server which does not support socket.io

const httpServer = http.createServer(expressServer);
// it converts my express server into http server

const io = new serverClass(httpServer);
// it is taking express http server and converting it into socket io compatable server
//

//.on is equivalent to .addEventListner

io.on("connection", (socket) => {
  //so the io is unquie and it is associated with my server
  //everytime someone hits the connection event it servers a unique socket

  socket.on("secret message", (data) => {
    io.emit("io secret message", data);
  });
});

expressServer.use(express.static("public"));
// it only works with express
//server.us => its a middleware
//express.static=> is a inbuilt function that servers the ui folder named as public which holds static ui files

httpServer.listen(8800);

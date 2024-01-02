var socket = io();
let userName = "";
const btn = document.getElementById("join_chat");
const userNameInput = document.getElementById("username");
const form = document.getElementById("form");
const chatRoom = document.querySelector(".chatroom-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messageConatiner = document.querySelector(".messages");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  userName = userNameInput.value;
  console.log(userName);
  if (userName) {
    // i need to redirect to chat page and hide form
    form.style.display = "none";
    chatRoom.style.display = "block";
  }
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    id: socket.id,
    userName: userName,
    message: messageInput.value,
  };
  messageInput.value = "";
  socket.emit("secret message", data);
  rendermessage(data, "SENT");
});

function rendermessage(data, type) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = `${data.message}`;

  if (type === "SENT") {
    msgDiv.setAttribute("class", "message sent");
  } else {
    msgDiv.setAttribute("class", "message");
  }
  messageConatiner.appendChild(msgDiv);
}

socket.on("io secret message", (data) => {
  //this data has socket id

  if (data.id !== socket.id) {
    rendermessage(data, "received");
  }
});

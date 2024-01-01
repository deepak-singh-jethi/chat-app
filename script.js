let userName = "";

const btn = document.getElementById("join_chat");
const userNameInput = document.getElementById("username");
const form = document.getElementById("form");
const chatRoom = document.querySelector(".chatroom-container");

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

function sendMessage() {
  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");

  let userText = input.value.trim();

  if (userText === "") return;

  // User Message
  let userMessage = document.createElement("div");
  userMessage.classList.add("user-message", "message");
  userMessage.innerText = userText;
  chatBox.appendChild(userMessage);

  input.value = "";

  // Bot Reply
  setTimeout(() => {
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message", "message");

    botMessage.innerText = "You said: " + userText;

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const voiceButton = document.getElementById("voiceButton");
const chat = document.getElementById("chat");
const typing = document.getElementById("typing");

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const textElement = document.createElement("div");
  textElement.textContent = text;

  bubble.appendChild(textElement);

  if (type === "bot") {
    const speakButton = document.createElement("button");
    speakButton.className = "speak-button";
    speakButton.textContent = "🔊 پخش پاسخ";

    speakButton.onclick = () => {
      speakPersian(text);
    };

    bubble.appendChild(speakButton);
  }

  message.appendChild(bubble);
  chat.insertBefore(message, typing);

  scrollToBottom();
}

function speakPersian(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "fa-IR";
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  typing.style.display = "flex";
  scrollToBottom();
}

function hideTyping() {
  typing.style.display = "none";
}

async function sendMessage(customText = null) {
  const text = customText || input.value.trim();

  if (!text) return;

  addMessage(text, "user");

  input.value = "";
  sendButton.disabled = true;

  showTyping();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: text
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    hideTyping();

    addMessage(
      data.reply || "پاسخی دریافت نشد.",
      "bot"
    );

    const lowerText = text.toLowerCase();

    // 🎮 بخش بازی‌ها
    if (
      lowerText.includes("بازی") ||
      lowerText.includes("گیم")
    ) {
      if (typeof addGamesSection === "function") {
        setTimeout(() => {
          addGamesSection();
        }, 300);
      }
    }

    // 🖥️ بخش سرور و تجهیزات
    if (
      lowerText.includes("سرور و تجهیزات شبکه") ||
      lowerText === "سرور"
    ) {
      if (typeof addServersSection === "function") {
        setTimeout(() => {
          addServersSection();
        }, 300);
      }
    }

    // 🖥️ کارت سرور فیزیکی
    if (
      lowerText.includes("سرور فیزیکی") ||
      lowerText.includes("سرور اختصاصی") ||
      lowerText.includes("dedicated server")
    ) {
      setTimeout(() => {
        addServerCard();
      }, 300);
    }

  } catch (error) {
    console.error("Chat error:", error);

    hideTyping();

    addMessage(
      "❌ ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.",
      "bot"
    );

  } finally {
    sendButton.disabled = false;
    input.focus();
  }
}

function quickMessage(text) {
  sendMessage(text);
}

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

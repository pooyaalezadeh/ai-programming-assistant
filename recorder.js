let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let audioStream = null;

async function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

async function startRecording() {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("مرورگر شما از ضبط صدا پشتیبانی نمی‌کند.");
      return;
    }

    audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    audioChunks = [];

    mediaRecorder = new MediaRecorder(audioStream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = createAudioMessage;

    mediaRecorder.start();

    isRecording = true;

    voiceButton.classList.add("recording");
    voiceButton.textContent = "⏹️";

    recordingStatus.textContent =
      "🔴 در حال ضبط... برای توقف دوباره روی دکمه بزنید";

  } catch (error) {
    console.error(error);

    recordingStatus.textContent =
      "❌ دسترسی به میکروفون داده نشد.";
  }
}

function stopRecording() {
  if (!mediaRecorder || !isRecording) {
    return;
  }

  mediaRecorder.stop();

  isRecording = false;

  voiceButton.classList.remove("recording");
  voiceButton.textContent = "🎤";

  recordingStatus.textContent =
    "🎤 ویس آماده شد";

  if (audioStream) {
    audioStream.getTracks().forEach(track => track.stop());
  }
}

function createAudioMessage() {
  const audioBlob = new Blob(audioChunks, {
    type: mediaRecorder.mimeType || "audio/webm"
  });

  const audioURL = URL.createObjectURL(audioBlob);

  const message = document.createElement("div");
  message.className = "message user";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const title = document.createElement("div");
  title.textContent = "🎤 پیام صوتی";

  title.style.marginBottom = "8px";
  title.style.fontWeight = "bold";

  const audio = document.createElement("audio");

  audio.controls = true;
  audio.src = audioURL;
  audio.style.width = "100%";

  bubble.appendChild(title);
  bubble.appendChild(audio);

  message.appendChild(bubble);

  chat.insertBefore(message, typing);

  chat.scrollTop = chat.scrollHeight;

  audioChunks = [];
}

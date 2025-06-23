const messages = [
  "Hai apa kabar?",
  "Gmna kuliahnya?, aman-aman aja kan?. Ouh iya skrg lagi dinas ya?",
  "Gmna serukan dinas nya?",
  "Kadang memang kerasa cape, tapi ya jalanin aja.",
  "Ouh iya mungkin kamu udh bosen denger aku bilang 'maaf'.",
  "Tapi kali ini bener-bener minta maaf. Selama ini aku ngerasa bersalah.",
  "Aku ngerasa bnyak salah sama kamu.",
  "Terkadang aku ngerasa minta maaf doang ga cukup.",
  "Tapi aku gatau harus apa selain minta maaf.",
  "Sal Maaf yaa"
];

let currentIndex = 0;
const messageBox = document.getElementById("messageBox");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Ketik teks dengan delay per karakter
function typeMessage(message, callback) {
  let i = 0;
  messageBox.textContent = "";
  
  const interval = setInterval(() => {
    messageBox.textContent += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 30); // Kecepatan mengetik
}

function updateMessage() {
  backBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === messages.length - 1;
  typeMessage(messages[currentIndex]);
}

backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateMessage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < messages.length - 1) {
    currentIndex++;
    updateMessage();
  }
});

// Initial load
updateMessage();

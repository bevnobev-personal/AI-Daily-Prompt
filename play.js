
setTimeout(() => {
  const audio = new Audio(chrome.runtime.getURL("ding.mp3"));
  audio.play().catch(err => console.log("Audio blocked:", err));
}, 200);

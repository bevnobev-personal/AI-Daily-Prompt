# 🤖 AI Daily Prompt – Chrome Extension

A simple Chrome Extension that asks you daily:  
**"How can I use AI today?"**

This extension is designed to build a habit of thinking about ways to use AI productively every day.

---

## ✨ Features

- ⏰ Opens automatically every day at **10:10 AM**
- 🧠 Shows ideas for using tools like **ChatGPT**, **DALL·E**, and more
- 🔔 Optional: **Triggers a desktop notification sound** using a local Python server on macOS

---

## 🧩 How It Works

- Uses Chrome's `alarms` API to schedule a tab to open once every 24 hours
- The tab displays links and prompts to spark AI thinking
- The extension also triggers a local HTTP request (`http://localhost:8989/play`) if you have the optional desktop sound server running

---

## 📁 Folder Contents

ai-daily-prompt/

-background.js # Service worker that schedules and handles reminders

-index.html # Full-page reminder with links and AI ideas

-play.js # Script that auto-plays a sound (if allowed)

-ding.mp3 # The sound played when triggered

-style.css # Visual styling

-manifest.json # Chrome extension config

---

## 🛠 Installation Instructions

### 1. Load the Extension in Chrome

1. Go to `chrome://extensions`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the `ai-daily-prompt/` folder

You're done! The tab will automatically open each day at 10:10 AM.

---

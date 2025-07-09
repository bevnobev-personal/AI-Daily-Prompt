
function scheduleDailyReminder(hour, minute) {
  const now = new Date();
  const target = new Date();
  target.setHours(hour);
  target.setMinutes(minute);
  target.setSeconds(0);
  target.setMilliseconds(0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const delayInMinutes = (target.getTime() - now.getTime()) / 1000 / 60;
  console.log(`Scheduling alarm for ${target} (in ${delayInMinutes.toFixed(2)} minutes)`);

  chrome.alarms.create('dailyAIQuestion', {
    delayInMinutes: delayInMinutes,
    periodInMinutes: 1440
  });
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  scheduleDailyReminder(10, 10);
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Chrome started");
  scheduleDailyReminder(10, 10);

  self.registration.showNotification('AI Prompt (startup)', {
    body: 'Here’s your daily nudge to use AI today!',
    icon: 'icon.png'
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyAIQuestion') {
    console.log("Alarm triggered at", new Date().toString());
    self.registration.showNotification('AI Prompt', {
      body: 'Click the extension icon to get AI ideas!',
      icon: 'icon.png'
    });

    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") }, (tab) => {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["play.js"]
        });
      }, 500);
    });
  }
});

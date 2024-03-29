/*global chrome*/
let state = false;
chrome.action?.onClicked?.addListener(function (tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action",
    });
  });
});

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "clicked_extension_button") {
    handleButtonClick();
  }
});
function handleButtonClick() {
  if (!state) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "dark_mode",
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "light_mode",
      });
    });
  }

  state = !state;
}

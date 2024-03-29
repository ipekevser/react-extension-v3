const container = document.querySelector(".orb-container");

if (container) {
  container.style.display = "none";

  chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
  });

  function toggle() {
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
}

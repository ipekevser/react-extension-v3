const container = document.querySelector(".orb-container");
const root = document.documentElement;

if (container) {
  container.style.display = "none";

  chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }

    if (request.message === "light_mode") {
      root.setAttribute("style", "filter: invert(0) hue-rotate(0deg);");
      container.setAttribute("style", "filter: none;");
    }

    if (request.message === "dark_mode") {
      root.setAttribute("style", "filter: invert(1) hue-rotate(180deg);");
      container.setAttribute("style", "filter: invert(1) hue-rotate(180deg);");
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

console.log("Content script loaded");

const container = document.querySelector(".containerrr");

if (container) {
  container.style.display = "none";

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(request.message);
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

/* chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.message);
    if (request.message === "clicked_browser_action") {
        const oldIframe = document.getElementById('cm-frame');

        if (oldIframe) {
          oldIframe.remove();
          return;
        }
  
        const iframe = document.createElement('iframe');
        iframe.setAttribute('id', 'cm-frame');
        iframe.setAttribute(
          'style',
          'top: 10px;right: 10px;width: 400px;height: calc(100% - 20px);z-index: 2147483650;border: none; position:fixed;'
        );
        iframe.setAttribute('allow', '');
        iframe.src = chrome.runtime.getURL('js/index.html');
  
        document.body.appendChild(iframe);
    }
  }); */

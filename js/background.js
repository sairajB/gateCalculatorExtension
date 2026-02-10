chrome.action.onClicked.addListener((tab) => {
  if (
    !tab.url ||
    tab.url.startsWith("chrome://") ||
    tab.url.startsWith("edge://") ||
    tab.url.startsWith("about:")
  ) {
    return;
  }
  const calculatorUrl = chrome.runtime.getURL("index.html");
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: injectCalculator,
      args: [calculatorUrl],
    })
    .catch(() => {});
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "toggle_calculator") {
    if (
      !tab.url ||
      tab.url.startsWith("chrome://") ||
      tab.url.startsWith("edge://") ||
      tab.url.startsWith("about:")
    ) {
      return;
    }
    const calculatorUrl = chrome.runtime.getURL("index.html");
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        func: injectCalculator,
        args: [calculatorUrl],
      })
      .catch(() => {});
  }
});

function injectCalculator(calculatorUrl) {
  const iframeId = "gate-calculator-iframe";
  const existingIframe = document.getElementById(iframeId);

  if (existingIframe) {
    existingIframe.remove();
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.id = iframeId;
  iframe.src = calculatorUrl;
  iframe.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    width: 470px;
    height: 320px;
    z-index: 2147483647;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    overflow: hidden;
  `;
  iframe.allow = "clipboard-read; clipboard-write";
  document.body.appendChild(iframe);

  // Drag state
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  function onMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    iframe.style.left = e.clientX - dragOffsetX + "px";
    iframe.style.top = e.clientY - dragOffsetY + "px";
    iframe.style.right = "auto";
  }

  function stopDrag() {
    if (!isDragging) return;
    isDragging = false;
    iframe.style.pointerEvents = "";
    document.removeEventListener("mousemove", onMouseMove, true);
    document.removeEventListener("mouseup", stopDrag, true);
  }

  window.addEventListener("message", function (event) {
    if (event.data.type && event.data.type === "closeCalculator") {
      const iframeToRemove = document.getElementById(iframeId);
      if (iframeToRemove) iframeToRemove.remove();
    }

    if (event.data.type && event.data.type === "startDrag") {
      isDragging = true;
      // Convert from right-based to left-based positioning on first drag
      const rect = iframe.getBoundingClientRect();
      iframe.style.left = rect.left + "px";
      iframe.style.top = rect.top + "px";
      iframe.style.right = "auto";
      // Disable pointer events on iframe so document captures all mouse events
      iframe.style.pointerEvents = "none";

      dragOffsetX = event.data.offsetX;
      dragOffsetY = event.data.offsetY;
      document.addEventListener("mousemove", onMouseMove, true);
      document.addEventListener("mouseup", stopDrag, true);
    }
  });
}

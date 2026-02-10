chrome.action.onClicked.addListener((tab) => {
  const calculatorUrl = chrome.runtime.getURL("index.html");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: injectCalculator,
    args: [calculatorUrl],
  });
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "toggle_calculator") {
    const calculatorUrl = chrome.runtime.getURL("index.html");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: injectCalculator,
      args: [calculatorUrl],
    });
  }
});

function injectCalculator(calculatorUrl) {
  const iframeId = "gate-calculator-iframe";
  const overlayId = "gate-calculator-drag-overlay";
  const existingIframe = document.getElementById(iframeId);

  if (existingIframe) {
    const existingOverlay = document.getElementById(overlayId);
    if (existingOverlay) existingOverlay.remove();
    existingIframe.remove();
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.id = iframeId;
  iframe.src = calculatorUrl;
  iframe.style.position = "fixed";
  iframe.style.top = "10px";
  iframe.style.right = "10px";
  iframe.style.width = "470px";
  iframe.style.height = "600px";
  iframe.style.zIndex = "9999";
  iframe.style.border = "none";
  document.body.appendChild(iframe);

  // Drag state
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  // Transparent overlay to capture mouse events over iframe during drag
  const overlay = document.createElement("div");
  overlay.id = overlayId;
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;cursor:move;display:none;";
  document.body.appendChild(overlay);

  function onMouseMove(e) {
    if (!isDragging) return;
    iframe.style.left = e.clientX - dragOffsetX + "px";
    iframe.style.top = e.clientY - dragOffsetY + "px";
    iframe.style.right = "auto";
  }

  function onMouseUp() {
    isDragging = false;
    overlay.style.display = "none";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  window.addEventListener("message", function (event) {
    if (event.data.type && event.data.type === "closeCalculator") {
      const iframeToRemove = document.getElementById(iframeId);
      if (iframeToRemove) iframeToRemove.remove();
      const overlayToRemove = document.getElementById(overlayId);
      if (overlayToRemove) overlayToRemove.remove();
    }

    if (event.data.type && event.data.type === "startDrag") {
      isDragging = true;
      // Convert from right-based to left-based positioning on first drag
      const rect = iframe.getBoundingClientRect();
      iframe.style.left = rect.left + "px";
      iframe.style.top = rect.top + "px";
      iframe.style.right = "auto";

      dragOffsetX = event.data.offsetX;
      dragOffsetY = event.data.offsetY;
      overlay.style.display = "block";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  });
}

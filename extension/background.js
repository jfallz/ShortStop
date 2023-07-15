chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url.includes("youtube.com/shorts/")) {
      chrome.tabs.update(tabId, { url: "https://www.youtube.com/" });
  } else if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({target: {tabId: tab.id}, function: deleteElement});
  }
});

function deleteElement() {
  const xpath2 = "//*[@id='items']/ytd-guide-entry-renderer[2]";
  const result2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  if (result2.singleNodeValue) {
    const elementToDelete = result2.singleNodeValue;
    elementToDelete.remove();
  }
}
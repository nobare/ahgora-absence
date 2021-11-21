const changeStatus = () => {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup",
    state: "fullscreen"
  })
};

chrome.webRequest.onBeforeRequest.addListener(
  changeStatus, {
  urls: ["https://seusucesso.ahgora.com.br/Chat/SetStatus/*"],
});

const getName = () => {
  const nome = document.querySelector(
    '#hello-message-panel > div.col-sm-8.introduction-hello-name > div:nth-child(1) > div > strong > a').innerHTML
  const nomeEditado = nome.slice(0, -1)
  return chrome.storage.sync.set({ 'Agente': nomeEditado });
}

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.status === 'complete') {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: getName
      }
    )
  }
})
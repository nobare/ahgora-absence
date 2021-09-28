const Offline = () => {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup",
    state: "fullscreen"
  })
};
const Online = () => {
  chrome.windows.create({
    url: chrome.runtime.getURL("online.html"),
    type: "popup",
    state: "fullscreen"
  })
};

chrome.webRequest.onBeforeRequest.addListener(
  Offline, {
  urls: ["https://seusucesso.ahgora.com.br/Chat/SetStatus/Offline*"],
});

chrome.webRequest.onBeforeRequest.addListener(
  Online, {
  urls: ["https://seusucesso.ahgora.com.br/Chat/SetStatus/Online*"],
});

const getName = () => {
  const nome = document.querySelector(
    '#hello-message-panel > div.col-sm-8.introduction-hello-name > div:nth-child(1) > div > strong > a').innerHTML
  const nomeEditado = nome.slice(0, -1)
  chrome.storage.sync.set({'Agente': nomeEditado});
  return console.log(`Agente: ${nomeEditado}`)
}

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.status === 'complete') {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        func: getName
    }
  )}
})
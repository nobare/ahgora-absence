function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
  let popup = open(
    "popup.html",
    "_blank",
    "toolbar=no,titlebar=no,fullscreen=yes,scrollbars=no,menubar=no,status=no,resizable=no")
  popup.focus();
};

chrome.webRequest.onBeforeRequest.addListener(
  logURL, {
  urls: ["https://seusucesso.ahgora.com.br/Chat/SetStatus/*"],
});

const getName = () => {
  console.log('Buscando Nome');
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
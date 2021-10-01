const updatePopup = () => {
    chrome.storage.sync.get(['Intervalos'], function(data) {
        return document.getElementById('intervalos').innerHTML = data.Agente;
    });
  }
  
  document.addEventListener('DOMContentLoaded', updatePopup);
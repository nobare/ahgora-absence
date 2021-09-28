const updatePopup = () => {
    chrome.storage.sync.get(['Agente'], function(data) {
        return localStorage.setItem('Agente', data.Agente)
    });
  }
  
  document.addEventListener('DOMContentLoaded', updatePopup);
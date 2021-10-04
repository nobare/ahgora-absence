const updatePopup = () => {
    try {
    chrome.storage.sync.get(['Agente'], function(data) {
        return localStorage.setItem('Agente', data.Agente)
    });
    } catch {
        console.log('Agente: Undefined')
    }
  }

document.addEventListener('DOMContentLoaded', updatePopup);

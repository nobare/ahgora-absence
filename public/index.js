//Database

const IDB = () => {
    let db = null;
    let objectStore = null;
    let DBOpenRequest = indexedDB.open("AhgoraPausas", 1);

    DBOpenRequest.addEventListener('error', (error) => {
        console.warn(error)
    });

    DBOpenRequest.addEventListener('success', (evnt) => {
        db = evnt.target.result;
        console.log('success', db);
    });

    DBOpenRequest.addEventListener('upgradeneeded', (evnt) => {
        db = evnt.target.result;
        console.log('upgrade', db)
    })
}

const updatePopup = () => {
    chrome.storage.sync.get(['Agente'], function(data) {
        return localStorage.setItem('Agente', data.Agente)
    });
  }

document.addEventListener('DOMContentLoaded', updatePopup);

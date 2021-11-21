const updateAgent = () => {
    chrome.storage.sync.get(['Agente'], (data) => {
        return localStorage.setItem('Agente', data.Agente)
    });
}

document.addEventListener('DOMContentLoaded', updateAgent);

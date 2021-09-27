const saveAbsence = async () => {
  window.close()
}

chrome.storage.sync.get(['Agente'], (data) => {
  document.getElementById('nomeAgente').innerHTML = data.Agente
  console.log(`Agente atual: ${data.Agente}`
  )
})

window.addEventListener('load', _ => {
  const date = new Date();
  const string = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  document.getElementById('time').innerHTML = string
});

document.getElementById('submit').addEventListener('click', getAbsence)
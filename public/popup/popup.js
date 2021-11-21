chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.state === false) {
        console.log('Noice');
        const id = localStorage.getItem('Id');
        const response = await axios.patch(`http://localhost:8080/pause/:${id}`, {
            "Pause": clockTime
        });
        return console.log(response);
    }
})
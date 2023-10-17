window.onload=()=>{
    chrome.runtime.onConnect.addListener((port)=> {
        console.assert(port.name === "video-speed");
        port.onMessage.addListener((msg)=> {
            const numberElement = document.getElementById('number');

            let currentNumber = msg.speed;

            numberElement.textContent = currentNumber

            document.getElementById('stop').addEventListener('click',()=>{
                port.postMessage({stop_Infintiy:"stop"});
                document.getElementById('fast').style.display = 'flex';
                document.getElementById('fast').textContent = "Stoppage"
            })

        })
    })
}
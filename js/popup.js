window.onload = () =>{
    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name === "video-speed");
        port.onMessage.addListener(function(msg) {
            const numberElement = document.getElementById('number');

            let currentNumber = msg.speed;

            numberElement.textContent = currentNumber

            document.getElementById('up').addEventListener('click', () => {
                if (currentNumber > 10){
                    document.getElementById('fast').textContent = "Exceeded the appropriate speed"
                }else{
                    document.getElementById('fast').textContent = null
                    currentNumber++;
                    port.postMessage({value:currentNumber});
                    numberElement.textContent = currentNumber;
                }
            });
        
            document.getElementById('down').addEventListener('click',()=>{
                if (currentNumber <= 1){
                    document.getElementById('fast').textContent = "Exceeded the appropriate speed"
                }else{
                    document.getElementById('fast').textContent = null
                    currentNumber--
                    port.postMessage({value:currentNumber});
                    numberElement.textContent = currentNumber;
                }
        
            })
        });
      });
}
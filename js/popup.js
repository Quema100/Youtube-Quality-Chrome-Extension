let canUpClick = true;

let canDownClick = true;

window.onload = () =>{
    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name === "video-speed");
        port.onMessage.addListener(function(msg) {
            const numberElement = document.getElementById('number');

            let currentNumber = msg.speed;

            numberElement.textContent = currentNumber

            document.getElementById('up').addEventListener('click', () => {
                if (canUpClick) {
                    if (parseInt(currentNumber) >= 16) {
                        document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                        canUpClick = false;

                        setTimeout(() => {
                            canUpClick = true;
                            }, 1000);
                    } else {
                        document.getElementById('fast').textContent = null;
                        currentNumber++;
                        port.postMessage({ value: currentNumber });
                        numberElement.textContent = currentNumber;
                        canUpClick = false;
                
                        setTimeout(() => {
                        canUpClick = true;
                        }, 1000);
                  }
                }
            });
        
            document.getElementById('down').addEventListener('click',()=>{
                if (canDownClick) {
                    if (parseInt(currentNumber) <= 1){
                        document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                        canDownClick = false;

                        setTimeout(() => {
                            canDownClick = true;
                            }, 1000);
                    }else{
                        document.getElementById('fast').textContent = null
                        currentNumber--
                        port.postMessage({value:currentNumber});
                        numberElement.textContent = currentNumber;                
                        canDownClick = false;
                        
                        setTimeout(() => {
                            canDownClick = true;
                        }, 1000);
                    }
                }
        
            })
        });
      });
}
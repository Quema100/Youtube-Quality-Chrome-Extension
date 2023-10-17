let canUpClick = true;

let canDownClick = true;

let flexClick = true;

window.onload = () =>{
    chrome.runtime.onConnect.addListener((port)=> {
        console.assert(port.name === "video-speed");
        port.onMessage.addListener((msg)=> {
            const numberElement = document.getElementById('number');

            let currentNumber = msg.speed;

            let flex_speed = msg.flex_speed;

            numberElement.textContent = currentNumber

            if (flex_speed === true){
                document.getElementById('fast').style.display = 'flex';
                document.getElementById('fast').textContent = "The speed has been fixed";
                if (flexClick){
                    document.getElementById('fast').addEventListener('click',()=>{
                        document.getElementById('fast').style.animation = "animation 1s";
                        flexClick = false;
                        
                        setTimeout(()=>{
                            document.getElementById('fast').style.animation = null;
                            flexClick = true;
                        },1000)
                    })
                }
            }else{
                document.getElementById('up').addEventListener('click', () => {
                    if (canUpClick) {
                        if (parseInt(currentNumber) >= 16) {
                            document.getElementById('fast').style.display = 'flex';
                            document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                            canUpClick = false;
    
                            setTimeout(() => {
                                canUpClick = true;
                                }, 1000);  
                        }else {
                            document.getElementById('fast').style.display = null;
                            document.getElementById('fast').textContent = null;
                            currentNumber++;
                            port.postMessage({ value: currentNumber });
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
                            document.getElementById('fast').style.display = 'flex';
                            document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                            canDownClick = false;
    
                            setTimeout(() => {
                                canDownClick = true;
                                }, 1000);
                        } else{
                            document.getElementById('fast').style.display = null;
                            document.getElementById('fast').textContent = null;
                            currentNumber--
                            port.postMessage({value:currentNumber});
                            canDownClick = false;
                            
                            setTimeout(() => {
                                canDownClick = true;
                            }, 1000);
                        }
                    }
            
                })
            }
        });
      });
}
window.onload=()=>{

    chrome.runtime.onConnect.addListener((port)=> {
        console.assert(port.name === "video-speed");
        port.onMessage.addListener((msg)=> {

            const numberElement = document.getElementById('number');

            const inputValueElement = document.getElementById('inputValue');
        
            let currentNumber = parseFloat(msg.speed);

            numberElement.textContent = currentNumber
        
            document.getElementById('submit').addEventListener('click',()=>{
                const inputValue = parseFloat(inputValueElement.value);
        
                if (inputValue > 16 || inputValue <= 0){
                    document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                }else{
                    document.getElementById('fast').textContent = null
                    if (!isNaN(inputValue)) {
                        currentNumber = parseFloat(inputValue.toFixed(1));
                        port.postMessage({value:currentNumber});
                    }
                }
            })
            document.getElementById('Infintiy').addEventListener('click',()=>{
                const inputValue = parseFloat(inputValueElement.value);
        
                if (inputValue > 16 || inputValue <= 0){
                    document.getElementById('fast').textContent = "Exceeded the appropriate speed";
                }else{
                    document.getElementById('fast').textContent = null
                    if (!isNaN(inputValue)) {
                        currentNumber = parseFloat(inputValue.toFixed(1));
                        port.postMessage({Infintiy_value:currentNumber});
                    }
                }
            })

        });
      });
}
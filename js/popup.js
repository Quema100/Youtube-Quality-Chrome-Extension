chrome.runtime.sendMessage({ message: "hello world!" });

console.log('this popup js file')
window.onload = () =>{
    const numberElement = document.getElementById('number');

    let currentNumber = 1;

    document.getElementById('up').addEventListener('click', () => {
        if (currentNumber >= 15){
            document.getElementById('fast').textContent = "Exceeded the appropriate speed"
        }else{
            currentNumber++;
            numberElement.textContent = currentNumber;
        }
    });

    document.getElementById('down').addEventListener('click',()=>{
        if (currentNumber <= 0){
            document.getElementById('fast').textContent = "Exceeded the appropriate speed"
        }else{
            currentNumber--
            numberElement.textContent = currentNumber;
        }

    })
}
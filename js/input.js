window.onload=()=>{
    const numberElement = document.getElementById('number');

    const inputValueElement = document.getElementById('inputValue');

    let currentNumber = 1;

    document.getElementById('submit').addEventListener('click',()=>{
        const inputValue = parseFloat(inputValueElement.value);

        if (inputValue > 15 || inputValue < 0){
            document.getElementById('fast').textContent = "Exceeded the appropriate speed"
        }else{
            currentNumber = 0;
            if (!isNaN(inputValue)) {
                currentNumber += inputValue;
                currentNumber = parseFloat(currentNumber.toFixed(1));
                numberElement.textContent = currentNumber;
            }
        }
    })
}
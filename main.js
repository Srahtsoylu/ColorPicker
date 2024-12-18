const colorPicker = document.querySelector(".renk");
const colorBackground = document.querySelector(".bgColor");
const colorCode = document.querySelector(".colorCode");
const colorRgb = document.querySelector(".colorRgb");
const input = document.querySelector(".renkKodu");


var setColor = () => colorBackground.style.backgroundColor = colorPicker.value;
setColor();

colorPicker.addEventListener("input", (e) => {
    colorBackground.style.backgroundColor = e.target.value;
    changeInputs(e.target.value)
})
function changeInputs(value) {
    
    colorCode.innerText = value;
    
    let RGB = hexToRgb(value)
    colorRgb.innerText = `rgb(${RGB.r}, ${RGB.g}, ${RGB.b})`
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

input.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    if (inputValue[0] == "#") {
        let convert = hexToRgb(inputValue);
        colorBackground.style.backgroundColor = `rgb(${convert.r}, ${convert.g}, ${convert.b})`
        changeInputs(inputValue);
        colorPicker.value = inputValue;
    } else if (inputValue[0] == "r" || inputValue[0] == "R") {
    }
})
function copyBoard(e) {
    var textarea = document.createElement('textarea');
    textarea.value = e.previousElementSibling.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
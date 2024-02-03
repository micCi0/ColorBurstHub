
const  bg = document.querySelector(".bg");
const gradinetElement = document.querySelector(".bg");
const selection = document.querySelector("select");
const colorInput1 = document.querySelector(".color1");
const colorInput2 = document.querySelector(".color2");
const textElement = document.querySelector(".code");
const refreshButton = document.querySelector(".refresh");
const copyButton = document.querySelector(".copy");
const optionDirections = document.querySelectorAll("option");

const defaultCode = " background: linear-gradient(to top, #ff0000 , #0000ff);"

let options =  {direction:"top",color1:"#ff0000",color2:"#0000ff" };
let code = ` background: linear-gradient(to ${options.direction}, ${options.color1} , ${options.color2});`

function gradientGenerator(){
    bg.style = code;
    textElement.textContent = code;
}
function uptade(){
    code = ` background: linear-gradient(to ${options.direction}, ${options.color1} , ${options.color2});`
    gradientGenerator();
}

function refreshColors(){
    bg.style = defaultCode;
    textElement.textContent = defaultCode;
    colorInput1.value = "#ff0000";
    colorInput2.value = "#0000ff";
    optionDirections[0].selected = true;
}

function copyText(){
    let btnText = copyButton.textContent;
    navigator.clipboard.writeText(textElement.textContent);
    copyButton.textContent = "Copied";
    setTimeout(() => {
        copyButton.textContent = btnText;
    }, 1000);

}

selection.addEventListener("change" , (e) =>{
    options.direction = e.target.value;
    uptade();
})
colorInput1.addEventListener("input" , (e) =>{
    options.color1 = e.target.value;
    uptade();
})
colorInput2.addEventListener("input" , (e) =>{
    options.color2 = e.target.value;
    uptade();
})

refreshButton.addEventListener("click" , refreshColors);
copyButton.addEventListener("click" , copyText);
onload = gradientGenerator();
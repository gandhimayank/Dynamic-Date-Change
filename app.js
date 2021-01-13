const button = document.querySelector("button");
button.addEventListener("click",showOutput);
const output = document.querySelector(".output");
output.setAttribute("style","color:red;");

function showOutput() {
    const date = new Date();
    let cur = date.getHours();
    let message;
    
    if(cur > 17){
        message = "it's evening";
        output.style.backgroundColor = "blue"
    }else if(cur > 12) {
        message = "it's afternoon";
        output.style.backgroundColor = "orange"
    }else if(cur > 0) {
        message = "it's morning";
        output.style.backgroundColor = "yellow"
    }else {
        message = "it's night";
        output.style.backgroundColor = "black"
    }

    output.innerHTML = "<h1>"+message+"</h1>";
}
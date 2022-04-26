
var i = 0;

let iv = setInterval(function(){
    let container = document.querySelector(".container");
    
    let top = Math.floor(Math.random() * 90);
    let left = Math.floor(Math.random() * 90);
    const alt = '<div class="alert" style="top: ' + top + '%; left: ' + left + '%;"' + '><div class="alert-text"><p>警報</p><p>WARNING</p></div></div>'
    let a = document.createElement("div");
    a.innerHTML = alt
    container.appendChild(a);
    i++;
    if(i > 60){
        clearInterval(iv);
    }
}, 50);
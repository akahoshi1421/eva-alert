const lines = '<div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>            <div class="title">                <p>LOADING</p>            </div>';
var i = 0;


let loadiv = setInterval(function(){
    let container = document.querySelector(".container");

    let a = document.createElement("div");
    a.className = "line";
    a.innerHTML = lines
    container.appendChild(a);
    i++;
    if(i > 20){
        clearInterval(loadiv);
    }
}, 50);
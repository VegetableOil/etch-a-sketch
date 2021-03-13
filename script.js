let canvas = document.getElementById("canvas");
let newDiv;

function makeDivs() {
    for (let i = 0; i < 10000; i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("tile");
        canvas.appendChild(newDiv);
    }
}

function changeBg() {
    $(".tile")
}

makeDivs();
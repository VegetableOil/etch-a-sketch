let canvas = document.getElementById("canvas");
let newDivArr = [];
let btn = document.getElementById("reset-btn");

function makeDivs() {
    for (let i = 0; i < 10000; i++) {
        newDivArr[i] = document.createElement("div");
        newDivArr[i].classList.add("tile");
        canvas.appendChild(newDivArr[i]);
    }

    newDivArr.forEach(div => {
        div.addEventListener("click", () => {
            newDivArr.forEach(tile => {
                tile.addEventListener("mouseover", () => {
                    let n = (Math.random() * 0xfffff * 1000000).toString(16);
                    tile.style.backgroundColor = '#' + n.slice(0, 6);
                });
            });
        });
    });

    btn.addEventListener("click", () => {
        newDivArr.forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    });
}

makeDivs();
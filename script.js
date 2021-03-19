let canvas = document.getElementById("canvas");
let div;
let size = 10;
let divs = [];
let sizeBtn = document.getElementById('grid-btn');
let resetBtn = document.getElementById('reset-btn');
let input = document.getElementById('size');

function main() {
    ////////////default size///////////
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        div = document.createElement('div');
        divs.push(div);
        canvas.appendChild(div);
    }

    divs.forEach(tile => {
        tile.onmouseover = () => {
            tile.style.backgroundColor = 'white';
        }
    });

    resetBtn.onclick = () => {
        divs.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }

    ///////////custom size/////////////
    sizeBtn.onclick = () => {
        size = input.value;

        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size*size; i++) {
            div = document.createElement('div');
            divs.push(div);
            canvas.appendChild(div);
        }

        divs.forEach(tile => {
            tile.onmouseover = () => {
                tile.style.backgroundColor = 'white';
            }
        });

        resetBtn.onclick = () => {
            divs.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        }
    }
}

main();
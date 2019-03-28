let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
let mainContainer = document.createElement('article');

document.body.appendChild(btn);
btn.appendChild(btnText);
document.body.appendChild(mainContainer);



btn.className = 'addDiv';

let id = '0';

let rainbow = ['DeepPink', 'FireBrick', 'GreenYellow', 'Lavender', 'Wheat', 'SpringGreen', 'Sienna', 'PowderBlue'];

function getRandomColor() {
    let randomColor = rainbow[Math.floor(Math.random() * rainbow.length)];
    return randomColor;
}

btn.addEventListener('click', function () {
    let square = document.createElement('div');
    mainContainer.appendChild(square);

    square.style.backgroundColor = 'black';
    square.style.width = '75px';
    square.style.height = '75px';
    square.style.cssFloat = 'left';
    square.className = 'squares';
    square.setAttribute('id', id);
    id++;

    square.addEventListener('mouseover', function () {
        square.style.color = 'white';
        square.textContent = square.id;
    })

    square.addEventListener('mouseout', function () {
        square.textContent = '';
    }
    );

    square.addEventListener('click', function () {
        square.style.backgroundColor = getRandomColor();
    });

    square.addEventListener('dblclick', function () {
        if (square.id % 2 === 0) {
            if (square.nextSibling === null) {
                alert('No square to delete!');
            } else {
                square.nextSibling.remove();
            }
        } else {
                if (square.previousSibling === null) {
                alert('No square to delete!');
            } else {
                square.previousSibling.remove();
            }
        }

    })

});










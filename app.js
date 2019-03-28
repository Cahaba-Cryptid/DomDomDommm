let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');

document.body.appendChild(btn);
btn.appendChild(btnText);


btn.className = 'addDiv';

btn.addEventListener('click', function(){
   let squareDiv = document.createElement('div');
   document.body.appendChild(squareDiv);
    
   squareDiv.style.backgroundColor = 'black';
    squareDiv.style.width = '75px';
    squareDiv.style.height = '75px';
    squareDiv.style.cssFloat = 'left';
    squareDiv.className = 'squares';
    squareDiv.setAttribute('id', id);
    id++;

});






var entries = document.querySelectorAll('.num');

for( var i = 0; i<entries.length; i++) {
    entries[i].addEventListener('click', numClick);
}

var op = document.querySelectorAll('.operand'); 

for(var i=0; i<op.length; i++){
    op[i].addEventListener('click',operatorClick);
}

document.querySelector('#equals').addEventListener('click', equalsTo);


document.querySelector('#clear').addEventListener('click', clearAll);



document.querySelector('#delete').addEventListener('click', clearScreen);


document.querySelector('#percent').addEventListener('click', percentage);

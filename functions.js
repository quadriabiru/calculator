var arr = [];
var brr = []; 
var repeat;
var operator;
var per;
var display = document.querySelector('#box');

function operatorClick(){
    if (operator == 'x') {
        operator = '*';
    }

    if (arr.length != 0 && brr.length != 0 && operator != null){
        equalsTo();
        operator = this.innerHTML; 
    }
     

    else{
        operator = this.innerHTML;
    }

    if (arr.length == 0 && operator == '-' ){
        arr.push(operator);
        operator = null;
    
    }
    if(arr.length == 0 && operator == '+'){
          operator = null;
     }

     if(arr.length == 0 && operator == '/'){
        operator = null;
   }
    
   if(arr.length == 0 && operator == 'x'){
    operator = null;
}

    if (arr.length != 0 && brr.length != 0 && operator == '/' || operator == 'x'){ 
        return;
    }
    console.log(operator);

   //display.value = operator;

}

function numClick(){
    if (per && operator == null){
    per = null;
    arr = [];
    var x = this.innerHTML;
    arr.push(x);
    console.log(arr);
    display.value= arr.join("");

} 
else if (operator == null){ 
    var x = this.innerHTML;
    arr.push(x);
    console.log(arr);
    display.value = arr.join("");
}
else{  
     var x = this.innerHTML;
     brr.push(x);
    console.log(brr);
    display.value = brr.join('');
}

}

function equalsTo(){ 
    if (operator == 'x'){
    numOne = Number(arr.join(''));
    numTwo = Number(brr.join(''));
    final = numOne + '*' + numTwo; 
    repeat = eval(final);
    console.log(repeat);
    display.value = repeat;
    arr = [];
    brr = []; 
    arr.push(repeat.toString());
    }

    else{
    numOne = Number(arr.join(''));
    numTwo = Number(brr.join(''));
    final = numOne + operator + numTwo; 
    repeat = eval(final);
    console.log(repeat);
    display.value = repeat;
    arr = [];
    brr = []; 
    arr.push(repeat.toString());
    }
    
}

function clearScreen(){
    if (operator == null){
        arr.pop();
        console.log(arr);
        display.value = arr.join('');
    }

    else {
        brr.pop()
        console.log(brr);
        display.value = brr.join('');
    }

}

function clearAll(){
    arr = [];
    brr = [];
    operator = null;
    console.log(arr, brr);
    display.value = '0';
}

function percentage(){
    if (operator == null){
        per = Number(arr.join(''))/100;
        arr = []; 
        arr.push(per);
        console.log(arr);
        display.value = arr.join('');
        }
    
    else{
        per = Number(brr.join(''))/100;
        brr = []; 
        brr.push(per);
        console.log(brr);
        display.value = brr.join('');
    }
}


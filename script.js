function fn0(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 0;
}

function fn1(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 1;
}

function fn2(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 2;
}

function fn3(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 3;
}

function fn4(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 4;
}

function fn5(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 5;
}

function fn6(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 6;
}

function fn7(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 7;
}

function fn8(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 8;
}

function fn9(){
    let before = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = before + 9;
}

// send value from above buttons
// save first value on variable on clicking operator
// save secound value on varable on clicling ecual button


let first__save;
let secound__save;
let operrator;

function fnAdd(){
    //save by the value exist in display right now
    first__save = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = ' ';
    //send signal to calculate by operter type
    operrator = '+';
}

function fnSubtract(){
    first__save = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = ' ';
    operrator = '-';
}

function fnMultiply(){
    first__save = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = ' ';
    operrator = '*';
}

function fnDivide(){
    first__save = document.getElementById("cal__display__numbers").innerHTML;
    document.getElementById("cal__display__numbers").innerHTML = ' ';
    operrator = '/';
}



function fnEquals(){
    secound__save = document.getElementById("cal__display__numbers").innerHTML;
    if (operrator == '+'){
        //send process results to display
        document.getElementById("cal__display__numbers").innerHTML = parseInt(first__save) + parseInt(secound__save);
    }
    else if (operrator == '-') {
        document.getElementById("cal__display__numbers").innerHTML = parseInt(first__save) - parseInt(secound__save);
    } 
    else if (operrator == '*') {
        document.getElementById("cal__display__numbers").innerHTML = parseInt(first__save) * parseInt(secound__save);
    }
    else if (operrator == '/') {
        document.getElementById("cal__display__numbers").innerHTML = parseInt(first__save) / parseInt(secound__save);
    }
    else {
        document.getElementById("cal__display__numbers").innerHTML = 'Invalid Operation';
    }
}

function fnClear(){
    let previouse = document.getElementById("cal__display__numbers").innerHTML;
    let eraser = previouse.slice(0, -1);
    document.getElementById("cal__display__numbers").innerHTML = eraser;
  }

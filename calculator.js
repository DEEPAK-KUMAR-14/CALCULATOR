
function clearscreen() {
    defaultfontsize();
    document.getElementById("input").innerHTML= "0";
    document.getElementById("output").innerHTML= "0";
}

function display(value) {
    defaultfontsize();
    if(document.getElementById("input").innerHTML=="0"){
        document.getElementById("input").innerHTML = value;
    }
    else{
        document.getElementById("input").innerHTML += value;
    }
    calculate();
}


function calculate() {
    var p = document.getElementById("input").innerHTML;
    var q = eval(p);
    document.getElementById("output").innerHTML = q;
}

function displayoutput(){
    document.getElementById("input").style.fontSize = "medium";
    document.getElementById("output").style.fontSize = "xx-large";
}

function defaultfontsize(){
    document.getElementById("input").style.fontSize = "xx-large";
    document.getElementById("output").style.fontSize = "medium";
}

clearscreen();

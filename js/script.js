

// change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Barisal,BD';
}

// fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="30px";
}

// colour change
function color(){
    document.getElementById("color").style.color="Skyblue";
}
// light off & on
function onLight(){
    document.getElementById("light").src="img/light_on.jpg";
}
function offLight(){
    document.getElementById("light").src="img/light_off.jpg";
}

// alert
function myAlert(){
    alert("not_allowed");
}

// alert function
function alertShow(){
    alert("welcome to the show");
}

// display hide and block
function displayHide(){
    document.getElementById("tHide").style.display="none";
}
function displayShow(){
    document.getElementById("tHide").style.display="block";
}

// show date
function showDate(){
    document.getElementById("s_date").innerHTML = Date();
}

// repeat
function myRepeat(){
    var store1 = "hello, ";
    document.getElementById("repeat").innerHTML = store1.repeat(5);
}

// total result
function result(){
    document.getElementById("result").innerHTML = 25 + 25;
}

// Addition
var x = 121;
var y = 11;
var z = x + y;
function myAddition(){
    document.getElementById("var_addi").innerHTML = z;
}

// Multiplication
var a = 11;
var b = 11;
var c = a * b;
function myMultiplication(){
    document.getElementById("var_multi").innerHTML = c;
}

// division
var f = 121;
var g = 11;
var h = f / g;
function division(){
    document.getElementById("division").innerHTML = h;
}

// hover over
 document.getElementById('hover').onmouseover = function() {
    this.style.backgroundColor = 'green';
  };

// hover out
   document.getElementById('out').onmouseout = function() {
    this.style.backgroundColor = 'yellow';
  };

// hover over
 document.getElementById('hvr').onmouseover = function() {
    this.style.backgroundColor = 'red';
  };

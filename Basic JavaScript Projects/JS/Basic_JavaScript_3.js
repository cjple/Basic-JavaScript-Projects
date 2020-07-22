function addition_Function() {
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function () {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var multiply = 2 * 3;
    document.getElementById("Math").innerHTML = "2 * 3 = " + multiply;
}

function divide() {
    var division = 4 / 4;
    document.getElementById("Math").innerHTML = "4 / 4 = " + division;
}

function operations() {
    var everything = (1+2) * 10/ 2 - 5;
    document.getElementById("Math").innerHTML = "(1+2) * 10/ 2 - 5 = " + everything;
}

function modulus_Operator() {
    var remainder = 25 % 4;
    document.getElementById("Math").innerHTML = "25 / 4, remainder is " + remainder;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
    var x = 5;
    x++;
    document.write(x);

    document.write("<br>")
    var y = 5;
    x--;
    document.write(y);

    window.alert(Math.random())

    document.write("<br>")
    var value = Math.PI;
    document.write(value);
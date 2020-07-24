document.write(typeof 10) //typeof method//


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function isNaNtrue() {
    document.getElementById("True").innerHTML = isNaN('007');
}


function isNaNfalse() {
    document.getElementById("False").innerHTML = isNaN('This sentence');
}


document.write("<br>");
document.write(3E310);

document.write("<br>");
document.write(-3E310);

document.write("<br>");
document.write(4>5);
document.write(5>4);

console.log(2+2);

document.write("10" + 5); //Expression combining a string and a number//

console.log(5<4);

document.write(5== 10);
document.write(5 + 5 == 10);

x = 10;
y = 10;
document.write(x===y);

x = 10;
y = "eleven";
document.write(x===y);

x = 10;
y = "ten";
document.write(x===y);

x = 10;
y = 11;
document.write(x===y);

document.write(1<2 && 2>1);
document.write(2<1 && 1<2);

document.write(1<2 || 2>1);
document.write(1>2 || 2<1);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5<10);
}

document.write(Bigger = (5<1) ? "Left is bigger":"Right is bigger");
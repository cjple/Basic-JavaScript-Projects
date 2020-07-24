
var X = 10; //Global Variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2(){
    document.write(X+100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3() {
    var y = 10; //Local Variable
    document.write(20 + y +"<br>");
}
function Add_numbers_4(){
    document.write(y+100);
}
Add_numbers_3();
Add_numbers_4();

var y = 10; 
function Add_numbers_3() {
    console.log(15 + y);
}
function Add_numbers_4(){
    console.log(y+100);
}
Add_numbers_3();
Add_numbers_4();



function LEE() {
    if (new Date().getHours() < 23) {
        document.getElementById("ASK").innerHTML = "88";
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 50) {
        Ride = "You are tall enough";
    }
    else {
        Ride = "You are not tall enough";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Ride;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
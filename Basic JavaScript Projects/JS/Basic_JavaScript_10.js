function Call_Loop() {
    var digit = ""
    var x = 1
    while (x < 5){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;    
}

function array_Function() {
    var dogs = [];
    dogs[0]= "Retriever";
    dogs[1]= "Labrador";
    dogs[2]= "Shiba Inu";
    dogs[3]= "Pitbull";
    document.getElementById("Array").innerHTML = "The dog is a " + dogs[1] + ".";
}

function constant_function() {
const Food_Types = {type:"carbs", calories:"100", name:"bread"};
    Food_Types.name = "potatos";
    Food_Types.cook = "boiled."
    document.getElementById("constant").innerHTML = "The " + Food_Types.type + " are " + Food_Types.name + " and they are " + Food_Types.cook;
}

    var x = 82;
    {
    let x = 28;
    }
    document.getElementById("let").innerHTML = x;


let food = {
    type: "protein",    
    name: "beef",
    calories: "200",
    cook: "fry",
    description: function() {
        return "The food is a " + this.type + " called " + 
        this.name + " with " + this.calories + " calories " + 
        " and you " + this.cook + " it.";
    }
};
document.getElementById("food_object").innerHTML = food.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if(i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("breaking").innerHTML = text;


var text = "";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continuing").innerHTML = text;
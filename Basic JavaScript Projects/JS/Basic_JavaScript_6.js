    function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Name, Type, Age, Color) {
    this.Animal_Name = Name;
    this.Animal_Type = Type;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}
var Spot = new Animal("Spot", "Retreiver", 8, "Golden")
var Mew = new Animal("Mew", "Shorthair", 2, "Grey")
var Ham = new Animal("Ham", "Hamster", 3, "White")
function myAnimals() {
    document.getElementById("New_and_This").innerHTML = 
    "The new pet's name is " + Spot.Animal_Name + ". He is a " + Spot.Animal_Type + " and is " + 
    Spot.Animal_Age + " years old. He is " + Spot.Animal_Color + "-colored."
}


function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2(){
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
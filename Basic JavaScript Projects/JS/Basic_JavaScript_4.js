function my_Dictionary() {
    var Car = {
        Make:"Honda",
        Model:"Accord",
        Color:"Black",
        Year:2020,
        Condition:"New",
    };
    delete Car.Condition;
    document.getElementById("Dictionary").innerHTML = Car.Condition;
}
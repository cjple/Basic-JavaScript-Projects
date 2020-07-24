function Sentence() { //concat()
    var first = "First part";
    var second = " connects to ";
    var third = "third part.";
    var fullsentence = first.concat(second, third);
    document.getElementById("Concatenate").innerHTML = fullsentence;
}

function slice_method() { //slice()
    var Sentence = "This is a sentence."
    var part = Sentence.slice(0,4);
    document.getElementById("Slice").innerHTML = part;
}

function myFunction() { //toUpperCase()
    var string="hi it's me";
    var upper = string.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function searchfun() { //search()
    var string="Searching this string"
    var search = string.search("string")
    document.getElementById("search").innerHTML = search;
}

function stringmeth() { //toString()
    var x = 808;
    document.getElementById("toString").innerHTML = x.toString();
}

function PrecisionMethod() { //toPrecision()
    var x = 808.808182838485850;
    document.getElementById("Precision").innerHTML = x.toPrecision(8);
}
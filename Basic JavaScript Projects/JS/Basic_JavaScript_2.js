function First() {
    var string = "My First Function is colored blue";
    string += " This is addition."
    var result = string.fontcolor("blue");
    
    document.getElementById('Blue_Text').innerHTML = result;
}
console.log("This is loaded from the external JS file");
alert("This is an alert!! Click to continue.");

var name = prompt("What is your name?");
let school = prompt("What school do you attend?");
var fun_fact = prompt("What should people know about you?");

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${fun_fact}`);

document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>"; 
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>"; 
document.getElementById("fun_fact").innerHTML = "<b>Fun Fact: </b><i>" + fun_fact + "</i>"; 

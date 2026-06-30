console.log("This is loaded from the external JS file");
alert("This is an alert!! Click to continue.");

var name = "Michael";
let school = "Mallard Creek High School";
var fun_fact = "I do photography";

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${fun_fact}`);

document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>"; 
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>"; 
document.getElementById("fun_fact").innerHTML = "<b>Fun Fact: </b><i>" + fun_fact + "</i>"; 

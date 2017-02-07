"use strict";

console.log("hello dark side");


var location = "The Unknown Regions";
var keyplayers = ["Count Dooku", "Darth Maul","General Grievous", "Greedo", "Jango Fett", "Darth Sidious"];


let getEvil = function(){
	console.log("Evil list of players", keyplayers);
	return keyplayers;
};

let setEvil = function(who){
	keyplayers.push(who);
	console.log("keyplayers", keyplayers);
};

module.exports = {
	getEvil, setEvil
};




// turned to dark side: Kylo Ren from Ben Solo and Darth Vader from Anakin Skywalker
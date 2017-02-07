"use strict";
console.log("hello light side");

let dark = require("./dark.js");


var location = "D'Qar";
var keyplayers = ["Princess Leia Organa", "Han Solo", "Chewbacca", "Admiral Ackbar", "Captain Verrack", "Jar Jar Binks", "Lando Calrissian", "Poe Dameron"];
var jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"];


let addJedi = function(who){
	jedi.push(who);
};

let getJedi = function(){
	return jedi;
};

let getPlayer = function(){
	console.log("getPlayer light", keyplayers);
	return keyplayers;
};

let setPlayer = function(who){
	keyplayers.push(who);
};

let removeJedi = function(who, name){
	//jedi will either die or go to dark side
	//when go to dark side, gets new name
	
	var whichIndex;
	jedi.forEach(function(item, index) {
		if (item === who){
			whichIndex = index;
		}
	});
	jedi.splice(whichIndex, 1); 
	console.log("jedi after death", jedi);
	//if dead, no new name
	if (name){
		//going to dark side results in new name
		dark.setEvil(name);
	}
};

let getLocation = function(whoAsks){
	console.log("whoAsks", whoAsks);
	var tell = true;
	let evilPlayers = dark.getEvil();
	evilPlayers.forEach(function(item) {
		if (item === whoAsks){
			tell = false;
		}
	});
	
	if (tell){
		console.log("location", location);
		return location;
	}else {
		var message = "You're evil, can't tell you";
		console.log("message", message);
		return message;
	}
};

module.exports = {
	addJedi, getJedi, getPlayer, setPlayer, removeJedi, getLocation
};



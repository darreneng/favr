'use strict';

//The Username and password for the account in session
var username;
var password;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('.delete').click(deleteFavr);
	//$('#offer').click(offerFavr);
	//$('#request').click(requestFavr);
	$('.complete').click(completeFavr);
	//$('#login').submit(checkLogin);
}

/* Ignore this function for now. Potentital use for authentication


function checkLogin(e){
	//Serialize input
	var fields = $(this).serialize();	

	valid = true;	
	wait = -1
	var i;
	var endingUsernameIndex;

	//Get Password
	for(i = fields.length-1; i >= 0; i-- ){
		if(fields[i] == '='){
			password = fields.slice(i+1,fields.length);
			break;
		}	
	}

	//Get Username
	i--;
	for(; i >= 0; i--){
		if(fields[i] == '&'){
			endingUsernameIndex = i;
		}
		if(fields[i] == '='){
			username = fields.slice(i+1,endingUsernameIndex);
			break;
		}
	}

	//Replace all + with space
	username = username.split('+').join(' ');
	
	//Check if credentials are valid

	$.get('/data', checkCredentials);
}

function checkCredentials(result){
	//Check all users in JSON
	for(var i = 0; i < result['users'].length; i++){
		if(username == result['users'][i]['username']){
			if(password == result['users'][i]['password']){
				break;
			}
			else{
				alert("Incorrect username and/or password");
			}		
		}
		if(i == result['users'].length-1){
			alert("Incorrect username and/or password");
		}
	}
}
*/

function deleteFavr(e){
	var yes = confirm("This Favr will be deleted.");
	if(!yes){
		return false;
	}
	alert("Successfully deleted Favr!");
}

function completeFavr(e){
	var yes = confirm("This Favr will be marked as completed.");
	if(!yes){
		return false;
	}
	alert("Successfully completed Favr!");
}

function offerFavr(e){
	var yes = confirm("Confirm that you will be offering a Favr.");
	if (!yes){
		return false;
	}
	alert("Successfully offered Favr!");
}

function requestFavr(e){
	var yes = confirm("Confirm what you will be requesting a Favr.");
	if(!yes){
		return false;
	}
	alert("Successfully requested Favr!");
}



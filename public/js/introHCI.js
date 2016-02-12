'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {

	$('.delete').click(deleteFavr);
	$('#offer').click(offerFavr);
	$('.complete').click(completeFavr);

}


function deleteFavr(e){
	e.preventDefault();
	var yes = confirm("Are you sure you want to delete this Favr?");
	if(yes){
		console.log("yes");
	}
	else{
		console.log("nah");
	}

}

function completeFavr(e){
	var yes = confirm("This task will be marked as completed.");
	if(!yes){
		return false;
	}
}

function offerFavr(e){
	var yes = confirm("Confirm that you will be offering a Favr.");
	if (!yes){
		return false;
	}
	alert("Successfully offered Favr!");
}



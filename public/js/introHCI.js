'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('.delete').click(deleteFavr);
	$('#offer').click(offerFavr);
	$('#request').click(requestFavr);
	$('.complete').click(completeFavr);
}

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



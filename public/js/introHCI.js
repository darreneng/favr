'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("REACHED");
	$('.delete').click(deleteFavr);
	// add any functionality and listeners you want here
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
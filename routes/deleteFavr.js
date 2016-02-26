var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.deleteFavr = function(req, res) {
	var id = parseInt(req.query.id);

	//Find the user_id currently logged on
	var user_id = -1;
	for(var i = 0; i < data['users'].length; i++){
		if(data['users'][i]['active']){
			user_id = i;
		}
	}

	//Remove the Favr from the list of the other associated user
	var otherUserId = -1;
	if(data['favrs'][id]['from'] == user_id){
		otherUserId = data['favrs'][id]['to'];
	}
	else{
		otherUserId = data['favrs'][id]['from'];
	}


	var favrs = data['users'][user_id]['favrs'];
	var otherFavrs = data['users'][otherUserId]['favrs'];

    // Delete favr from list of favrs of both users
	for (i = 0; i < favrs.length; i++) {
		if (favrs[i] === id) {
				favrs.splice(i, 1);
		}
	}
	for (j = 0; j < otherFavrs.length; j++ ) {
	  	if(otherFavrs[j] === id){
	  		otherFavrs.splice(j,1);
	  	}
	}


  res.render('home', userdata.getUserData(data, user_id));
}

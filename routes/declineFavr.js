var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.decline = function(req, res){
	var id = parseInt(req.query.id);

	//Find the user_id currently logged on
	var user_id = -1;
	for(var i = 0; i < data['users'].length; i++){
		if(data['users'][i]['active']){
			user_id = i;
		}
	}


	var favrs = data['users'][user_id]['favrs'];

	//Delete the Favr from that user's favr list
  	for (i = 0; i < favrs.length; i++) {
		if (favrs[i] === id) {
			favrs.splice(i, 1);
		}
  	}

  	// //Delete the Favr JSON
  	// for(i = 0; i < data['favrs'].length; i++){
  	// 	if (data['favrs'][i]['id'] === id ){
  	// 		data['favrs'].splice(i,1);
  	// 		console.log("DECLINED");
  	// 	}
  	// }

  res.render('home', userdata.getUserData(data, user_id));
}

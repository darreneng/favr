exports.getUserData = function(data, user_id) {
  var user = data['users'][user_id]; // Specific user in database
  var user_data = {}; // data to pass to view
  var user_favrs = user['favrs']; // All favrs related to user
  var favrs = data['favrs']; // All favrs from database

  // Get a list of pending favors from and to
  var favrs_from = [];
  var favrs_to = [];
  var favrs_incoming = [];
  var favrs_completed = [];

  // Go through each favr and add it to the data to render the home page if it involves
  // the current user
  for (var i = 0; i < user_favrs.length; i++) {
    var id = user_favrs[i]; // Get ID of favr
    if (favrs[id].completed) {
      favrs_completed.push(favrs[id]);
    } else {
      if (favrs[id].from == user_id)
      {
        if (favrs[id].accepted) {
          favrs_from.push(favrs[id]);
        } else {
          favrs_incoming.push(favrs[id]);
        }
      } else if (favrs[id].to == user_id)
      {
        favrs_to.push(favrs[id]);
      }
    }

  } // end for

  user_data.favrs_from = favrs_from;
  user_data.favrs_to = favrs_to;
  user_data.favrs_incoming = favrs_incoming;
  user_data.favrs_completed = favrs_completed;
  user_data.username = user.username;
  //user_data.id = user.id;
  console.log(favrs_incoming);
  return user_data;
};

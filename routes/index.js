
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Cam Newton',
        'image': 'cam.png',
        'id': 'project1',
        'cfavor': 'Buy me red cups',
        'rfavor': 'I will let you borrow ping pong balls'
      },
      { 'name': 'Peyton Manning',
        'image': 'peyton.jpg',
        'id': 'project2',
        'cfavor': 'Pick me up from LAX at 6:30 PM',
        'rfavor': 'I will buy you lunch at Del Taco in return.'
      },
      { 'name': 'Tom Brady',
        'image': 'brady.jpg',
        'id': 'project3',
        'cfavor': 'Buy me red cups',
        'rfavor': 'I will let you borrow ping pong balls'
      },
    ],
    'favrs': [
      {
        'name': 'Mark',
        'task': 'Cook Dinner',
        'done': 1,
        'month': 2,
        'day': 4,
        'id': 'favr1'
      },
      {
        'name': 'Tim',
        'task': 'Do Dishes',
        'done': 1,
        'month': 2,
        'day': 11,
        'id': 'favr2'
      },
      {
        'name': 'Ron',
        'task': 'Clean Clothes',
        'done': 1,
        'month': 3,
        'day': 21,
        'id': 'favr3'
      },
      {
        'name': 'Latavius',
        'task': 'Get Groceries',
        'done': 1,
        'month': 4,
        'day': 20,
        'id': 'favr4'
      },
    ],
  });
};

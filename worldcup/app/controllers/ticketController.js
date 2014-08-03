var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var ticketController = new Controller();

var UserRequestDao = require('../daos/Dao').UserRequestDao;
var UserRequest = require('../models/UserRequest');

/*
 Description: List Action. List all request data.
 */
ticketController.list = function() {
  this.res.json({status:'Success'});
}

ticketController.create = function() {
  var userRequest = UserRequest.onCreate(this);

  console.log(userRequest);
  var response = this.res;
  UserRequestDao.add(userRequest, function (err, result) {
    if (err) {
      var resData = {
        status: 'Failure',
        message: err
      };
      response.json(resData);
    } else {
      var resData = {
        status: 'Success',
        message: '创建成功'
      };
      response.json(resData);
    }
  });
}

ticketController.near = function() {
  var location = {};
  location.longitude = parseFloat(this.param('long'));
  location.latitude = parseFloat(this.param('lat'));
  var distance = 6371;

  var response = this.res;
  UserRequestDao.near(location, distance, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
      response.json(doc.results);
    }
  });
}

ticketController.update = function () {
  var id = this.param('id');
  var newValue = {};
  newValue.phoneNumber = this.param('phoneNumber');
  newValue.description = this.param('description');

  UserRequestDao.update(id, newValue);

  var resData = {
    status: 'Success'
  };

  this.res.json(resData);
}

module.exports = ticketController;

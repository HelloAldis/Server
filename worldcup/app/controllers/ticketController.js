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
  UserRequestDao.add(userRequest);

  var resData = {
    status: 'Success'
  };

  this.res.json(resData);
}

ticketController.near = function() {
  var location = {};
  location.longitude = parseFloat(this.param('long'));
  location.latitude = parseFloat(this.param('lat'));
  var distance = 5;

  UserRequestDao.near(location, distance);

  var resData = {
    status: 'Success'
  };

  this.res.json(resData);
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

/**
Here is the User Request schema
var GPSLocation = {
  createNew: function () {
    var gpsLocation = {};
    gpsLocation.type = 'Point'; // only support Point currently
    gpsLocation.coordinates = []; // should be number
    gpsLocation.coordinates[0] = 113.41 // should be longitude range [-180, 180]
    gpsLocation.coordinates[1] = 29.58 // should be latitude range [-90, 90]

    return gpsLocation;
  }
}

var UserRequest = {
  createNew: function () {
    var userRequest = {};
    userRequest.phoneNumber = 'should be phoneNumber';
    userRequest.location = GPSLocation.createNew();
    userRequest.title = 'should be title';
    userRequest.description = 'should be description'
    userRequest.date = new Date();
    userRequest.privatePassword = 'should be passsword';
    userRequest.status = 'should be status';

    return userRequest;
  }
}
*/
var UserRequest = {
  onCreate: function (dto) {
    var userRequest = dto.param('userRequest');
    userRequest.date = new Date();
    userRequest.status = 'active';
    userRequest.location.coordinates[0] = parseFloat(userRequest.location.coordinates[0]);
    userRequest.location.coordinates[1] = parseFloat(userRequest.location.coordinates[1]);

    return userRequest;
  }
}

module.exports = UserRequest;

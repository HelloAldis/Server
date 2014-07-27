var ObjectID = require('mongodb').ObjectID;
var DBManager = require('./DBManager');

var UserRequestCollection = {
  collection: function () {
    if (this.col) {
      return this.col;
    } else {
      this.col = DBManager.getDb().collection('UserRequest');
      return this.col;
    }
  },
}

var UserRequestDao = {
  add: function (userRequest) {
    var collection = UserRequestCollection.collection();
    collection.insert(userRequest, {w:1}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  },

  findOne: function (id) {
    var collection = UserRequestCollection.collection();
    var objId = ObjectID(id);
    collection.findOne({'_id': objId}, function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
      }
    });
  },

  near: function (location, distance) {
    var collection = UserRequestCollection.collection();
    collection.geoNear(location.longitude, location.latitude, {maxDistance:distance/6371, distanceMultiplier:6371, spherical:true},
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log(docs);
        }
      })
  },

  update: function (id, newValue) {
    var collection = UserRequestCollection.collection();
    var objId = ObjectID(id);
    collection.update({'_id': objId}, {$set: newValue}, {w:1}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = {'UserRequestDao':UserRequestDao};

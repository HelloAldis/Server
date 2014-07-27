var IndexManager = {
  init: function (db) {
    db.ensureIndex('UserRequest', {location:'2dsphere'}, {w:1}, function (err, indexName) {
      if (err) {
        console.log(err);
        console.log('create index failed !');
      } else {
        console.log(indexName);
        console.log('create successfully !');
      }
    });
  }
}

var DBManager = {
  getDb: function () {
    if (this.db) {
      return this.db
    } else {
      var Db = require('mongodb').Db;
      var Server = require('mongodb').Server;
      this.db = new Db('exampleDb', new Server('127.0.0.1', 27017), {w:1});
      this.db.open(function (err, db) {
          if (err) {
            console.log(err);
          } else {
            console.log('DB connected !');
            IndexManager.init(db);
          }
      });

      return this.db;
    }
  },

  init: function () {
    var db = this.getDb();
  }
}
module.exports = DBManager;

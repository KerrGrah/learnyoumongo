const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/' + process.argv[2], (err, db) => {
  if (err)
    throw err;
  let collection = db.collection('users');
  collection.update({
    "username": "tinatime"
  }, {
    $set: {
      "age": 40
    }
  }, (err, data) => {
    if (err)
      throw err;
    db.close();
  });
});

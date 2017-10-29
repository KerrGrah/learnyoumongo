const mongo = require('mongodb').MongoClient;

let age = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err)
    throw err;
  let collection = db.collection('parrots');
  collection.count({
    age: {
      $gt: + age
    }
  }, (err, count) => {
    if (err)
      throw err;
    console.log(count);
    db.close();
  });
});

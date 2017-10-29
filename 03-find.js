const mongo = require('mongodb').MongoClient;

let age = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err)
    throw err;
  db.collection('parrots').find({
    age: {
      $gt: + age
    }
  }).toArray((err, data) => {
    console.log(data);
    db.close();
  });
});

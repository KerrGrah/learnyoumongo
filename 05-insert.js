const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err)
    throw err;
  let collection = db.collection('docs');
  let newObj = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  };
  collection.insert(newObj, (err, data) => {
    if (err)
      throw err;
    console.log(JSON.stringify(newObj));
    db.close();
  });
});

const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err)
    throw err;
  let collection = db.collection('prices');
  collection.aggregate([
    {
      $match: {
        size: process.argv[2]
      }
    }, {
      $group: {
        _id: 'total',
        total: {
          $avg: '$price'
        }
      }
    }
  ]).toArray((err, results) => {
    if (err)
      throw err;
    let average = results[0]['total'].toFixed(2);
    console.log(average);
    db.close();
  });
});

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
// const db             = require('../react-ui/config/db');
const db             = process.env.mongoURL || require('../config/db');

// maybe find a way to change this process.env.PORT
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
// if (cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);
//
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//
//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });
//
// } else {
  // const app = express();

  // Priority serve any static files.

  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  // app.get('/api', function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send('{"message":"Hello from the custom serverzz!"}');
  // });

  // app.get('/algorithms', async (req, res) => {
  //   res.set('Content-Type', 'application/json');
  //
  //   let arr = await db.collection('algorithms').find().toArray();
  //   res.send(arr);
  // });

  // All remaining requests return the React app, so it can handle routing.
  // app.get('*', function(request, response) {
  //   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  // });

  // app.listen(PORT, function () {
  //   console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  // });

  // MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  MongoClient.connect(db, { useNewUrlParser: true }, (err, database) => {
    // MongoClient.connect('mongodb://algorandom:password123@ds125293.mlab.com:25293/algorandom', (err, database) => {
    console.log("I am connected");
    console.log(db);
    console.log(PORT);
    console.log(database);
    console.log("end of sentence");

    if (err) return console.log(err)

    app.listen(PORT, () => {
      console.log('We are live on ' + PORT);
    });

    app.get('/api', function (req, res) {
      res.set('Content-Type', 'application/json');
      res.send('{"message":"Hello from the custom servers!"}');
    });

    app.get('/algorithms', async (req, res) => {

      let arr = await database.collection('algorithms').find().toArray();
      res.send(arr);
    });

    app.put('/algorithms/:title', (req,res) => {
    const details = { 'title': req.params.title };

    const isSolved = { isSolved: req.body.isSolved };
    database.collection('algorithms').update(details, {$set : isSolved}, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(isSolved);
      }
    });
  });

    app.get('*', function(request, response) {
      response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
    });


  });
// }

// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const app            = express();
// // const db             = require('../react-ui/config/db');
// const db             = process.env.mongoURL || require('../config/db');
//
// const port = process.env.PORT || 5000;
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// // MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
// MongoClient.connect(db, { useNewUrlParser: true }, (err, database) => {
// // MongoClient.connect('mongodb://algorandom:password123@ds125293.mlab.com:25293/algorandom', (err, database) => {
//   if (err) return console.log(err)
//   // require('.how is this still being read/server/app/routes')(app, database);
//
//   function routes(app, db) {
//     app.post('/algorithms', (req, res) => {
//       const algorithm = { category: req.body.category,
//         title: req.body.title,
//         question: req.body.question,
//         isSolved: req.body.isSolved
//       };
//       db.collection('algorithms').insert(algorithm, (err, result) => {
//         if (err) {
//           res.send({ 'error': 'An error has occurred' });
//         } else {
//           res.send(result.ops[0]);
//         }
//       });
//     });
//
//     app.get('/algorithms', async (req, res) => {
//       let arr = await db.collection('algorithms').find().toArray();
//       res.send(arr);
//     });
//
//     app.put('/algorithms/:title', (req,res) => {
//     const details = { 'title': req.params.title };
//
//     const isSolved = { isSolved: req.body.isSolved };
//     db.collection('algorithms').update(details, {$set : isSolved}, (err, result) => {
//       if (err) {
//           res.send({'error':'An error has occurred'});
//       } else {
//           res.send(isSolved);
//       }
//     });
//   });
//   };
//
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// })

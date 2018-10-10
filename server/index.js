// const express = require('express');
// const path = require('path');
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
//
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const app            = express();
// // const db             = require('../react-ui/config/db');
// const db             = process.env.mongoURL || require('../config/db');
//
// const PORT = process.env.PORT || 5000;
//
// // Multi-process to utilize all CPU cores.
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
//   // const app = express();
//
//   // Priority serve any static files.
//   app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
//
//   // Answer API requests.
//   app.get('/api', function (req, res) {
//     res.set('Content-Type', 'application/json');
//     res.send('{"message":"Hello from the custom server!"}');
//   });
//
//   // All remaining requests return the React app, so it can handle routing.
//   app.get('*', function(request, response) {
//     response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
//   });
//
//   app.listen(PORT, function () {
//     console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
//   });
//
//   MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
//     // MongoClient.connect('mongodb://algorandom:password123@ds125293.mlab.com:25293/algorandom', (err, database) => {
//     if (err) return console.log(err)
//     require('./app/routes')(app, database);
//     app.listen(PORT, () => {
//       console.log('We are live on ' + PORT);
//     });
//   });
// }

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
// const db             = require('../react-ui/config/db');
const db             = process.env.mongoURL || require('../config/db');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
MongoClient.connect(db, { useNewUrlParser: true }, (err, database) => {
// MongoClient.connect('mongodb://algorandom:password123@ds125293.mlab.com:25293/algorandom', (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})

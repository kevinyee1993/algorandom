module.exports = function(app, db) {
  const algorithms =
  app.post('/algorithms', (req, res) => {
    const algorithm = { text: req.body.body };
    db.collection('algorithms').insert(algorithm, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

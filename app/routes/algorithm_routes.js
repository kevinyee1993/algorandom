module.exports = function(app, db) {

  // const algorithms =
  app.post('/algorithms', (req, res) => {
    const algorithm = { category: req.body.category,
      title: req.body.title,
      question: req.body.question,
      isSolved: req.body.isSolved
    };
    db.collection('algorithms').insert(algorithm, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

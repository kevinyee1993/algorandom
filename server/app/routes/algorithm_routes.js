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

  app.get('/algorithms', async (req, res) => {
    console.log(db);
    let arr = await db.collection('algorithms').find().toArray();
    res.send(arr);
  });

  app.put('/algorithms/:title', (req,res) => {
  const details = { 'title': req.params.title };

  const isSolved = { isSolved: req.body.isSolved };
  db.collection('algorithms').update(details, {$set : isSolved}, (err, result) => {
    if (err) {
        res.send({'error':'An error has occurred'});
    } else {
        res.send(isSolved);
    }
  });
});
};

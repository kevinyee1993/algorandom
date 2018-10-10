# AlgoRandom

[Live Version](https://algorandom.herokuapp.com/)

# Questions
All questions are from "Cracking the Coding Interview" by Gayle Laakmann McDowell.  I will gladly take them down if there are any complaints.  After I get a job.  Just kidding I'd take them down right away.

# Description

As someone who is looking for his first programming job, I found myself constantly juggling my time between studying algorithms and creating new projects to keep my skills sharp.  That's when I realized I could save time by combining both of those in one, so I created this.  **AlgoRandom  is an app which serves users random algorithm questions based on their desired topics.**  Whoever uses this app will become a stronger programmer, and recruiters should reach out to those people.  kevinyee1993@gmail.com  



# Features
### Serving Random Questions
Whenever a user clicks one of the topic buttons, they will be shown a random unsolved question of that topic.  
![topicSelect](https://i.imgur.com/ujD9jFe.gif)


### Marking Questions as Solved
Whenever a user solves a question, they can mark the question as solved.  The solved question will be removed from the question set, so that the user will only see fresh questions.  
![questionSolved](https://i.imgur.com/Reehtu6.gif)


### Resetting Question Set
Once all the questions of a set have been marked as solved, a user can reset the question set of that topic, and enjoy the process all over again.

![questionReset](https://i.imgur.com/eLCu0F3.gif)




# Technologies
### React/Redux
Built the front-end using this.  Redux was especially useful in setting up the communication between the topic buttons and the question display.



### Axios
Axios was used to get the total question list from the database and to update each question as solved.

```
  componentDidMount() {
    axios.get('/algorithms')
    .then(response => {
        let questionHash = arrayToHash(response.data);
        this.setState({ questionList: questionHash })
      }
    )
    .catch(error => console.log("error!"))
  }

```

```
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

```
### Express/Node.js
Set up the back-end using this, which worked nicely with mLab (see section below).  

### mLab
I'm a big fan of MongoDB because of how relatively effortlessly the schema can be changed.  mLab was connected to the server using MongoClient.

```
MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
```

### Future Directions
* More questions
* Cooler animations when users solve question instead of just a fire emoji
* Ability to support multiple users at once (e.g. all users get their own set of questions)

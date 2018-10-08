import React, { Component } from 'react';
import { connect } from 'react-redux';

const axios = require('axios');

class QuestionDisplay extends Component {
  constructor(props) {
    super(props);
    this.currentQuestion = { "title": null };
    this.state = { questionList: [] };
  }

  componentDidMount() {
    axios.get('/algorithms')
      .then(response => this.setState({ questionList: response.data }))
      .catch(error => console.log("error!"))
  }

  selectRandomQuestion(currentTopic) {
    let questionList = this.filterQuestions(currentTopic);
    let randomNum = Math.floor(Math.random() * questionList.length);

    let selectedQuestion = questionList[randomNum];

    if(selectedQuestion) {
      while(selectedQuestion.title === this.currentQuestion.title) {
        randomNum = Math.floor(Math.random() * questionList.length);
        selectedQuestion = questionList[randomNum];

      }
    }

    return selectedQuestion;
  }

  filterQuestions(currentTopic) {
    const filteredQuestions = [];

    this.state.questionList.forEach(question => {
      if(question.category === currentTopic && !question.isSolved) {
        filteredQuestions.push(question);
      }
    });

    return filteredQuestions;
  }

  render() {

    let selectedQuestion = this.selectRandomQuestion(this.props.currentTopic);
    if(selectedQuestion) {
      this.currentQuestion = selectedQuestion;
    }

    if(selectedQuestion) {
      return(
        <div className='question-display-body'>
          <h2>{ selectedQuestion.title }</h2>
          <p>{ selectedQuestion.question }</p>
          <button>Solved it!</button>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentTopic: state.currentTopic.topic,
    alternate: state.currentTopic.alternate
  }
}

export default connect(mapStateToProps)(QuestionDisplay);

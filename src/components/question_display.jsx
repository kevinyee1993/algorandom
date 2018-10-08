import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { topicSelected } from '../actions/index';

const axios = require('axios');

const MODAL_TIMER = 1000;

class QuestionDisplay extends Component {
  constructor(props) {
    super(props);
    this.currentQuestion = { "title": null };
    this.state = { questionList: [] };

    this.selectedQuestion = null;

    // this.questionSolvedPressed = false;
    // this.selectedEmoji = null;

    this.questionSolved = this.questionSolved.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    axios.get('/algorithms')
    .then(response => {
        this.setState({ questionList: response.data })
      }
    )
    .catch(error => console.log("error!"))
  }


  selectRandomQuestion(currentTopic) {
    let questionList = this.filterQuestions(currentTopic);


    // TODO: handles the removal of questions
    if(questionList.length === 1) {
      this.selectedQuestion = questionList[0];
      return questionList[0];
    } else if(questionList.length === 0) {
      return null;
    }

    let randomNum = Math.floor(Math.random() * questionList.length);

    let selectedQuestion = questionList[randomNum];

    if(selectedQuestion) {
      while(selectedQuestion.title === this.currentQuestion.title) {
        randomNum = Math.floor(Math.random() * questionList.length);
        selectedQuestion = questionList[randomNum];

      }
    }

    this.selectedQuestion = selectedQuestion;
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

  async questionSolved() {
    this.toggleModal();
    setTimeout(() => { this.props.topicSelected(this.props.currentTopic); }, MODAL_TIMER);

    await axios.put(`/algorithms/${ this.selectedQuestion.title }`, { isSolved: true })
      .then(success => console.log("nice"))
      .catch(error => console.log(error))

  }

  toggleModal() {
    // this.questionSolvedPressed = true;
    // this.pickRandomEmoji();
    let modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
    setTimeout(function() {
      let modal = document.querySelector(".modal");
      modal.classList.toggle("show-modal");
    }, MODAL_TIMER);
  }

  pickRandomEmoji() {
    console.log(this.questionSolvedPressed);
    if(this.questionSolvedPressed) {
      let selectedEmoji;
      const emojiList = [
        'https://ubisafe.org/images/transparent-flames-fire-emoji-2.png',
        'https://ubisafe.org/images/transparent-emoji-thumbs-up-3.png',
        'https://ubisafe.org/images/transparent-emoji-happy.png',
        'https://ubisafe.org/images/smile-transparent-happy-3.png',
        'https://ubisafe.org/images/appay-clipart-emojis-3.png',
        'https://ubisafe.org/images/blushed-clipart-cool-emoji-4.png'
      ];

      selectedEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      this.questionSolvedPressed = false;
      this.selectedEmoji = selectedEmoji;

      return selectedEmoji;
    } else {
      return this.selectedEmoji;
    }
  }


  render() {
    let selectedQuestion = this.selectRandomQuestion(this.props.currentTopic);
    if(selectedQuestion) {
      // this.setState({ currentQuestion: selectedQuestion })
      this.currentQuestion = selectedQuestion;
    }

    // console.log(this.selectedEmoji);

    if(selectedQuestion) {
      return(
        <div className='question-display-body'>
          <h2>{ selectedQuestion.title }</h2>

          <div className="modal">
            <div className="modal-content">
              <h1>Well done!</h1>
              <img src={ 'https://ubisafe.org/images/transparent-flames-fire-emoji-2.png' } alt="emoji" width="70" height="70"></img>
            </div>
          </div>

          <p>{ selectedQuestion.question }</p>

          <button className="solved-button" onClick={ this.questionSolved }>Solved it!</button>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ topicSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDisplay);

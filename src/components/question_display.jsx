import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { topicSelected } from '../actions/index';

const axios = require('axios');

const MODAL_TIMER = 1000;
const NO_MORE_QUESTIONS = "No more questions in this set!"

class QuestionDisplay extends Component {
  constructor(props) {
    super(props);
    this.currentQuestion = { "title": null };
    this.state = { questionList: [], resetCounter: 0 };

    this.selectedQuestion = null;

    // this.questionSolvedPressed = false;
    // this.selectedEmoji = null;

    this.questionSolved = this.questionSolved.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.resetQuestions = this.resetQuestions.bind(this);
    this.filterSolvedQuestions = this.filterSolvedQuestions.bind(this);
  }

  componentDidMount() {
    axios.get('/algorithms')
    .then(response => {
        let questionHash = arrayToHash(response.data);
        this.setState({ questionList: questionHash })
      }
    )
    .catch(error => console.log("error!"))
  }


  selectRandomQuestion(currentTopic) {
    // TODO: questionList length is 0, might be something wrong with filterQuestions
    let questionList = this.filterQuestions(currentTopic);


    // TODO: handles the removal of questions
    if(questionList.length === 1) {
      this.selectedQuestion = questionList[0];
      return questionList[0];
    } else if(questionList.length === 0) {
      return { title: NO_MORE_QUESTIONS, question: "Would you like to reset?" };
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

// TODO: PROBLEM MIGHT BE HERE?!?!?!?
filterQuestions(currentTopic) {
    const filteredQuestions = [];
    let titles = Object.keys(this.state.questionList);

    for(let i = 0; i < titles.length; i++) {
      let title = titles[i];

      if(this.state.questionList[title].category === currentTopic && !this.state.questionList[title].isSolved) {
        filteredQuestions.push(this.state.questionList[title]);
      }
    }

    // Object.keys(this.state.questionList).forEach(async title => {
    //   if(this.state.questionList[title].category === currentTopic && !this.state.questionList[title].isSolved) {
    //     await filteredQuestions.push(this.state.questionList[title]);
    //   }
    // });

    // console.log(filteredQuestions);

    return filteredQuestions;
  }

  async questionSolved() {
    this.toggleModal();
    setTimeout(() => { this.props.topicSelected(this.props.currentTopic); }, MODAL_TIMER);

    this.state.questionList[this.selectedQuestion.title].isSolved = true;

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

  filterSolvedQuestions(currentTopic) {
    const filteredQuestions = [];
    let titles = Object.keys(this.state.questionList);

    for(let i = 0; i < titles.length; i++) {
      let title = titles[i];

      if(this.state.questionList[title].category === currentTopic) {
        filteredQuestions.push(this.state.questionList[title]);
      }
    }
    return filteredQuestions;
  }

  async resetQuestions() {
    let filteredQuestions = this.filterSolvedQuestions(this.props.currentTopic);
    // let questionTitles = Object.keys(filteredQuestions);

    // for(let i = 0; i < questionTitles.length; i++) {
    for(let i = 0; i < filteredQuestions.length; i++) {
      await axios.put(`/algorithms/${ filteredQuestions[i].title }`, { isSolved: false })
        .then(success => console.log("nice"))
        .catch(error => console.log(error))
    }

    // this.setState({ resetCounter: 1 });
    // this.selectedQuestion = this.selectRandomQuestion(this.props.currentTopic);
  }


  render() {
    this.selectedQuestion = this.selectRandomQuestion(this.props.currentTopic);
    if(this.selectedQuestion) {
      this.currentQuestion = this.selectedQuestion;
    }

    // console.log(this.selectedEmoji);

    if(this.selectedQuestion && this.selectedQuestion.title !== NO_MORE_QUESTIONS) {
      return(
        <div className='question-display-body'>
          <h2>{ this.selectedQuestion.title }</h2>

          <div className="modal">
            <div className="modal-content">
              <h1>Well done!</h1>
              <img src={ 'https://ubisafe.org/images/transparent-flames-fire-emoji-2.png' } alt="emoji" width="70" height="70"></img>
            </div>
          </div>

          <p>{ this.selectedQuestion.question }</p>

          <button className="solved-button" onClick={ this.questionSolved }>Solved it!</button>
        </div>
      );
    } else if(this.props.currentTopic){
      return(
        <div className='question-display-body'>
          <h2>{ this.selectedQuestion.title }</h2>
          <p>{ this.selectedQuestion.question }</p>
          <button className="reset-button" onClick={ this.resetQuestions }>Reset question list</button>
        </div>
      );
    } else {
      return(
        <div>
        </div>
      )
    }
  }
}

function arrayToHash(arr) {
  let hash = {};

  for(let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    hash[currEl.title] = currEl;
  }

  return hash;
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

import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import TopicSelect from './components/topic_select';
import QuestionDisplay from './components/question_display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopicSelect />
        <QuestionDisplay />
      </div>
    );
  }
}

export default App;

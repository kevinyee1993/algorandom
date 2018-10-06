import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDisplay extends Component {
  render() {
    return(
      <div className='question-display-body'>
        { this.props.currentTopic }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTopic: state.currentTopic
  }
}

export default connect(mapStateToProps)(QuestionDisplay);

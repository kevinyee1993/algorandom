import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { topicSelected } from '../actions/index';

class TopicSelect extends Component {
  render() {
    return(
      <div className='topic-select-body'>
        <button onClick={ () => this.props.topicSelected('arrays-strings') }>Arrays and Strings</button>
        <button onClick={ () => this.props.topicSelected('linked-lists') }>Linked Lists</button>
        <button onClick={ () => this.props.topicSelected('stacks-queues') }>Stacks and Queues</button>
        <button onClick={ () => this.props.topicSelected('trees-graphs') }>Trees and Graphs</button>
        <button onClick={ () => this.props.topicSelected('bit-manipulation') }>Bit Manipulation</button>
        <button onClick={ () => this.props.topicSelected('recursion-dynamic') }>Recursion and Dynamic Programming</button>
        <button onClick={ () => this.props.topicSelected('sorting-searching') }>Sorting and Searching</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ topicSelected }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopicSelect);

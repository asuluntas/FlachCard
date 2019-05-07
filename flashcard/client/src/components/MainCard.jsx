import React from 'react';

class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: false,
      lastWord: props.word.english
    }
    this.handleAnswerStateChange=this.handleAnswerStateChange.bind(this);
  }

  handleAnswerStateChange() {
    this.setState({
      answer: !this.state.answer
    });
  }

  render() {
    if (this.props.word.english !== this.state.lastWord) {
      this.state.answer = false;
      this.state.lastWord = this.props.word.english;
    }
    return (
      <button className='maincard' onClick={this.handleAnswerStateChange}>
        <div className='wordmain'>{this.state.answer ? this.props.word.turkish : this.props.word.english}</div>
      </button>
    );
  }
}

export default MainCard;
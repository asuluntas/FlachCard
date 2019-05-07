import React from 'react';

class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.getCurrentCard = this.getCurrentCard.bind(this);
    this.incrementIndex = this.incrementIndex.bind(this);
  }

  componentDidMount() {
    this.incrementIndex();
    console.log('index', this.state.currentIndex);
  }

  getCurrentCard() {
    return this.props.words[this.state.currentIndex].english;
  }

  incrementIndex() {
    this.setState({
      currentIndex: this.state.currentIndex++
    });
  }

  render() {
    return (<div className='maincard'>
      <div className='wordmain'>{this.getCurrentCard()}</div>
      </div>);
  }
}

export default MainCard;
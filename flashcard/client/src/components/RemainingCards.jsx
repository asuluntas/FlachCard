import React from 'react';
import CardStack from './CardStack.jsx';

class RemainingCards extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<CardStack
      deckTitle='Remaining Cards'
      cardTitle={this.props.words && this.props.words.length > 0 ? this.props.words[0].english : null}
      handleStateChange={this.props.handleStateChange}
      buttonColor='#1E90FF'
      marginTop='70px'
      gridColumn='4/5'
    />);
  }
}

export default RemainingCards;
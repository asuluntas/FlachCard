import React from 'react';
import CardStack from './CardStack.jsx';

class DontKnowCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <CardStack
      deckTitle='Dont Know'
      cardTitle={this.props.words && this.props.words.length > 0 ? this.props.words[0].english : null}
      handleStateChange={this.props.handleStateChange}
      buttonColor='#E9573F'
      marginTop='20px'
      gridColumn='1/2'
    />);
  }
}

export default DontKnowCard;
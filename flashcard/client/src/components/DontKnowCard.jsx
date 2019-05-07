import React from 'react';
import CardStack from './CardStack.jsx';

class DontKnowCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <CardStack
      deckTitle="Don't Know"
      cardTitle={this.props.words && this.props.words.length > 0 ? this.props.words[0].english : null}
      handleStateChange={this.props.handleStateChange}
      buttonColor='#FF0000'
      marginTop='20px'
      gridColumn='1/2'
    />);
  }
}

export default DontKnowCard;
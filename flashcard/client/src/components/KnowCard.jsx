import React from 'react';
import CardStack from './CardStack.jsx';

class KnowCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<CardStack
      deckTitle='Know'
      cardTitle={this.props.words && this.props.words.length > 0 ? this.props.words[0].english : null}
      handleStateChange={this.props.handleStateChange}
      buttonColor='#8CC152'
      marginTop='40px'
      gridColumn='1/2'
    />);
  }
}

export default KnowCard;
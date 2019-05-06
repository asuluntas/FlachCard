import React from 'react';

class CardStack extends React.Component {
  constructor(props) {
    super(props);
      console.log('cardstack', this.props.words);
  }


  render() {
    return (<div className='cardstack'>
      <div className='word'>Flash Cards</div>
    </div>);
  }
}

export default CardStack;
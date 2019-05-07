import React from 'react';

class CardStack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={{ marginTop: this.props.marginTop, gridColumn: this.props.gridColumn}}>
      <div className='card' hidden={!this.props.cardTitle}>
        <div className='word'> {this.props.cardTitle} </div>
      </div>
      <button
        className="button"
        style={{ marginTop: 80, backgroundColor: this.props.buttonColor, zIndex: 5}}
        onClick={this.props.handleStateChange}>{this.props.deckTitle}
      </button>
    </div>
    );
  }
}

export default CardStack;


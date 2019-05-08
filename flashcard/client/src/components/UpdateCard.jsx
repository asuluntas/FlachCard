import React from 'react';
import axios from 'axios';

class UpdateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      english: '',
      turkish: ''
    }
    this.onEnglishChange = this.onEnglishChange.bind(this);
    this.onTurkishChange = this.onTurkishChange.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  onEnglishChange(e) {
    this.setState({
      english: e.target.value,
      turkish: this.state.turkish,
    });
  }

  onTurkishChange(e) {
    this.setState({
      english: this.state.english,
      turkish: e.target.value,
    });
  }

  updateCard() {
    axios.put('/flashcard/update', {
      english: this.state.english,
      turkish: this.state.turkish
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (<div className='deleteCard'>
      <h3 >Update flash card</h3>
      <label>English:
          <input
          type="text"
          required minLength="1" maxLength="15"
          value={this.state.english}
          onChange={this.onEnglishChange}>
          </input>
        </label>

        <label>Turkish:
          <input
          type="text"
          required minLength="1" maxLength="15"
          value={this.state.turkish}
          onChange={this.onTurkishChange}>
          </input>
        </label>
        <button onClick={this.addWords}>Update</button>
    </div>);
  }
}

export default UpdateCard;
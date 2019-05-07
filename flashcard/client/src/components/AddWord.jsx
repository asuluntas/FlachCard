import React from 'react';
import axios from 'axios';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      english: '',
      turkish: ''
    }
    this.onEnglishChange = this.onEnglishChange.bind(this);
    this.onTurkishChange = this.onTurkishChange.bind(this);
    this.addWords = this.addWords.bind(this);
    this.submit = this.submit.bind(this);
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


  submit() {
    this.props.onClick(this.state.english, this.state.turkish);
  }

  addWords() {
    axios.post('/flashcard/add', {
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
    return (<div>
      <h3 >Add new flash card</h3>
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
        <button onClick={this.addWords}>Submit</button>
    </div>);
  }
}

export default AddWord;
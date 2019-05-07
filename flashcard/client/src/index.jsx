import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MainCard from './components/MainCard.jsx';
import KnowCard from './components/KnowCard.jsx';
import DontKnowCard from './components/DontKnowCard.jsx';
import RemainingCards from './components/RemainingCards.jsx';
import Start from './components/Start.jsx';
import AddWord from './components/AddWord.jsx';

class Flashcard extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      currentWord: null,
      knownWords: [],
      unknownWords: [],
      remainingWords: [],
      words: [],
    }
    this.getWords = this.getWords.bind(this);
    this.handleGameStateChange = this.handleGameStateChange.bind(this);
    this.handleKnowStateChange = this.handleKnowStateChange.bind(this);
    this.handleDontKnowStateChange = this.handleDontKnowStateChange.bind(this);
  }

  handleGameStateChange() {
    this.state.currentWord = this.state.words && this.state.words.length > 0 ? this.state.words[0] : null;
    var remainingCards = this.state.words;
    remainingCards.shift();
    this.setState({
      remainingCards: remainingCards,
      knownWords: [],
      unknownWords: [],
    });
  }

  handleKnowStateChange() {
    this.state.knownWords.unshift(this.state.currentWord);
    this.state.currentWord = this.state.remainingCards.length > 0 ? this.state.remainingCards[0] : null;
    this.state.remainingCards.shift();
    // is it necessary?
    this.setState({
      render: true
    });
  }

  handleDontKnowStateChange() {
    this.state.unknownWords.unshift(this.state.currentWord);
    this.state.currentWord = this.state.remainingCards.length > 0 ? this.state.remainingCards[0] : null;
    this.state.remainingCards.shift();
    // is it necessary?
    this.setState({
      render: true
    });
  }

  getWords() {
    axios.get('/flashcard')
      .then(res => {
        this.setState({ words: res.data })
      })
      .then(() => {this.handleGameStateChange(); console.log('state', this.state)})
  }


  render() {
    return (<div className="container">
      {this.state.remainingCards ? <MainCard word={this.state.currentWord}/> : null}
      <KnowCard words={this.state.knownWords} handleStateChange={this.handleKnowStateChange}/>
      <RemainingCards words={this.state.remainingCards} handleStateChange={null}/>
      <DontKnowCard words={this.state.unknownWords} handleStateChange={this.handleDontKnowStateChange}/>
      <Start getWords={this.getWords}/>
      <AddWord/>
    </div>);
  }
}

ReactDOM.render(<Flashcard />, document.getElementById('flachcard'));
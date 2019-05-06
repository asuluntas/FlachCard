import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Know from './components/Know.jsx';
import DontKnow from './components/DontKnow.jsx';
import RemainingCards from './components/RemainingCards.jsx';
import CardStack from './components/CardStack.jsx';
import MainCard from './components/MainCard.jsx';
import DontKnowCard from './components/DontKnowCard.jsx';
import KnowCard from './components/KnowCard.jsx';
import Start from './components/Start.jsx';

class Flashcard extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      gameOn: false,
      knownOn: false,
      dontKnowOn: false,
      words: []
    }
    this.getWords = this.getWords.bind(this);
    this.handleGameStateChange = this.handleGameStateChange.bind(this);
    this.handleKnownStateChange = this. handleKnownStateChange.bind(this);
    this.handleDontKnowStateChange = this.handleDontKnowStateChange.bind(this);
  }

  handleGameStateChange() {
    this.setState({
      gameOn: true
    });
  }

  handleKnownStateChange() {
    this.setState({
      knownOn: true
    });
  }

  handleDontKnowStateChange() {
    this.setState({
      dontKnowOn: true
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
      <Know handleKnownStateChange={this.handleKnownStateChange}/>
      <DontKnow handleDontKnowStateChange={this.handleDontKnowStateChange}/>
      <RemainingCards/>
      <CardStack words={this.state.words}/>
      {this.state.gameOn ? <MainCard/> : null}
      {this.state.dontKnowOn ? <DontKnowCard/> : null}
      {this.state.knownOn ? <KnowCard/> : null}
      <Start getWords={this.getWords}/>
    </div>);
  }
}

ReactDOM.render(<Flashcard />, document.getElementById('flachcard'));
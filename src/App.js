import React, { Component } from 'react';
import Card from './Card'
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: []
    }
  }
  render() {
    return (
      <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {this.props.lists.map(list => {
        return (
        <List 
          header={list.header}
          key={list.id}
          cards={list.cardIds.map(id => {return this.props.allCards[id]})}
        />
        )
      })}
      </main>
    );
  }
}

export default App;

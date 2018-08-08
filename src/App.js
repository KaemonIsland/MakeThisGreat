import React, { Component } from 'react';
import CardList from './component/CardList/CardList';
import SearchField from './component/SearchField/SearchField';
import Footer from './component/Footer/Footer';
import mtgDevSearch from './component/mtgDevSearch/mtgDevSearch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: '',
      search: '',
      searchType: 'name'
    }

    this.writeName = this.writeName.bind(this);
    this.searchCard = this.searchCard.bind(this);
  }


  writeName(searchTerm) {
    this.setState({ search: searchTerm });
  }

  searchCard() {
    mtgDevSearch.searchCard(this.state.search, this.state.searchType)
    .then(cards => this.setState({ cards: cards.cards, search: '', searchType: 'name' }));
  }

  componentDidMount() {
    mtgDevSearch.onStartSearch()
    .then(cards => this.setState({ cards: cards.cards }))
  }


  render() {
    return (
      <div className="app">
        <SearchField  
          onChange={this.writeName} 
          searchCard={this.searchCard} />
        {
          !this.state.cards ? 
          <h1>loading</h1> : 
          (
            <div>
              <CardList  
                cards={this.state.cards} 
                searchType={this.state.searchType}
                />
            </div>
          )
        }
        <Footer />
      </div>
      
    )
  }
}

export default App;

    /*let card = {
      artist: "Christopher Rush",
      cmc: 0,
      id: "c944c7dc960c4832604973844edee2a1fdc82d98",
      imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card",
      layout: "normal",
      legalities: [
        {format: "Commander", legality: "Banned"}, 
        {format: "Legacy", legality: "Banned"}, 
        {format: "Vintage", legality: "Restricted"}],
      manaCost: "{0}",
      multiverseid: 3,
      name: "Black Lotus",
      originalText: "Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
      originalType: "Mono Artifact",
      printings: ["LEA", "LEB", "2ED", "CED", "CEI", "VMA"],
      rarity: "Rare",
      reserved: true,
      set: "LEA",
      setName: "Limited Edition Alpha",
      text:"{T}, Sacrifice Black Lotus: Add three mana of any one color.",
      type: "Artifact"
    }*/
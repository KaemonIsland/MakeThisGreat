import React, { Component } from 'react';
import CardList from './component/CardList/CardList';
import SearchField from './component/SearchField/SearchField';
import Footer from './component/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: '',
      search: '',
      searchType: 'set'
    }

    this.writeName = this.writeName.bind(this);
    this.searchCard = this.searchCard.bind(this);
  }

  sortCards = (cardsObj) => {
    switch(this.state.searchType) {
        case "set":
            cardsObj.sort((a, b) => a.multiverseid - b.multiverseid);
            break;
        case 'name':
            cardsObj.sort((a, b) => b.multiverseid - a.multiverseid);
            break;
    }
  }


  writeName(searchTerm) {
    this.setState({ search: searchTerm });
  }

  searchCard() {
    try {
      let query = this.state.search;
      let search = fetch(`https://api.magicthegathering.io/v1/cards?name=${query}`);
      this.handleSearch(search);
      this.setState({ search: '', searchType: 'name' });
    } catch (error) {
     console.log(error); 
    }
  }

  async handleSearch(query) {
    query.then(resp => resp.json())
    .then(card => {
      this.sortCards(card.cards)
      this.setState({ cards: card.cards })
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    let search = fetch('https://api.magicthegathering.io/v1/cards?set=M19&page=1');
    this.handleSearch(search);
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
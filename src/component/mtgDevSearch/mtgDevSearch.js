 const mtgDevSearch = {

    onStartSearch() {
        try {
            return fetch(`https://api.magicthegathering.io/v1/cards?set=M19`)
            .then(res => res.json())
          .then(card => {
            this.sortCards(card.cards, 'set');
            return card;
          })
        } catch (error) {
         console.log(error); 
        }
    },

    searchCard(query, searchType) {
        try {
          return fetch(`https://api.magicthegathering.io/v1/cards?name=${query}`)
          .then(res => res.json())
          .then(card => {
            this.sortCards(card.cards, searchType);
            return card;
          })
        } catch (error) {
         console.log(error); 
        }
      },

    sortCards(cardsObj, searchType) {
      switch(searchType) {
          case "set":
              cardsObj.sort((a, b) => a.multiverseid - b.multiverseid);
              break;
          case 'name':
              cardsObj.sort((a, b) => b.multiverseid - a.multiverseid);
              break;
      }
    }

}

export default mtgDevSearch;
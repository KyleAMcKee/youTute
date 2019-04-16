var React = require('react')
//var Router = ReactRouter.BrowserRouter;

var Nav = require('./Nav');
var Card = require('./Card');
var NewCard = require('./NewCard');
var api = require('../utils/api');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getNextCard = this.getNextCard.bind(this);
    this.getPreviousCard = this.getPreviousCard.bind(this);
    this.state = {
      cards: [],
      currentCard: null
    }
  }

  // Pass in a user id here and return cards that need to be reviewed
  componentDidMount() {
    api.fetchCards(1)
      .then(function (cards) {
        this.setState(function () {
          return {
            cards: cards.data,
            currentCard: cards.data[0],
            currentCardIdx: 0
          }
        })
      }.bind(this));
  }

  // Return the next card in a deck
  getNextCard() {
    var index = this.state.currentCardIdx;
    var cards = this.state.cards;
    
    index + 1 >= this.state.cards.length ? index = 0 : ++index;

    this.setState(function() {
      return {
        currentCard: cards[index],
        currentCardIdx: index
      }
    });
  }

  // Return the previous card in a deck
  getPreviousCard() {
    var index = this.state.currentCardIdx;
    var cards = this.state.cards;

    index - 1 < 0 ? index = this.state.cards.length - 1 : --index;

    this.setState(function() {
      return {
        currentCard: cards[index],
        currentCardIdx: index
      }
    });
  }


  render() {
    return (
      <div>
        {!this.state.currentCard 
          ? <p>Retrieving deck information from server...</p>
          : 
        <Card
          link = {this.state.currentCard.avatar}
          tags = {this.state.currentCard.first_name}
          notes = {this.state.currentCard.last_name}
          // link={this.state.currentCard.link}
          // tags={this.state.currentCard.tags}
          // notes={this.state.currentCard.notes}
        /> }
        <div className="columns">
          <NewCard drawCard={this.getPreviousCard} whichWay={'Previous'}/>
          <NewCard drawCard={this.getNextCard} whichWay={'Next'}/>
        </div>

      </div>
        
    )
  }
}

module.exports = App
var React = require('react');

class NewCard extends React.Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard(){
    this.props.drawCard();
  }

  render() {
    return (
      <div className="column">
        <button 
          className="button is-light is-primary is-outlined" 
          onClick={this.drawCard}
        >
          {this.props.whichWay}
        </button>
      </div>
      
    )
  }
}

module.exports = NewCard
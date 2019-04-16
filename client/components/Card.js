var React = require('react')

function Card(props) {
  return (
    <div className="card has-text-centered">
      <header className="card-header is-centered">
        {props.tags}
      </header>
      <div className="card-image">
        <div className="video-container">
          <iframe 
            width="853" 
            height="480" 
            src="https://www.youtube.com/embed/H34QpoJsmrw?start=7" 
            frameBorder="0" allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="card-content">
        {props.notes}
      </div>
    </div>
  )
}
  // title
  // video
  // notes
  // 4 buttons
  // last reviewed
  // edit


module.exports = Card;
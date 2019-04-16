var axios = require('axios');

module.exports = {
  fetchCards: function(deckId) {
    return axios.get('https://reqres.in/api/users')
      .then(function (response) {
        return response.data;
      });
  }

  // Fetch all decks
}
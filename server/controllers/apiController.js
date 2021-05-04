  const axios = require ('axios');

  module.exports = {
    fetchQuotes: (req, res) => {
       let quotes = []
      axios.get('https://officeapi.dev/api/quotes/random')
      .then(response => {
        quotes.push(response.data)
        res.status(200).send(quotes[0].data)
      })
      .catch(error => console.log(error.message))
    }


    

  }
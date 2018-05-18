const request = require('request')
const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const oakdexPokedex = require('oakdex-pokedex')

let caughtPokemon = []

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// endpoints
app.get('/', (req, res) => {
  request("https://pokeapi.co/api/v2/pokemon/?limit=151", ((error, response, body) => {
    if (!error && response.statusCode == 200) {
      let apiData = JSON.parse(body)
      let pokemonList = apiData.results
      res.send({ pokemonList, caughtPokemon })
    }
  }))
})

app.post('/', (req, res) => {
  caughtPokemon = req.body.caughtPokemon

  res.json({ success: true })
})

app.get('/pokeData', (req, res) => {
  oakdexPokedex.allPokemon({ dex: 'kanto' }, ((pokemon) => {
    const pokeData = pokemon.map((poke) => {
      return (
        {
          name: poke.names.en,
          id: poke.national_id,
          type: poke.types,
          height: poke.height_us,
          weight: poke.weight_us,
          description: poke.pokedex_entries.Red.en
        }
      )
    })
    const sortedPokeData = pokeData.sort((a, b) => {
      return parseFloat(a.id) - parseFloat(b.id);
    })
    res.send(sortedPokeData)
  }));
})

// port listening
app.listen(port, function () {
  console.log(`listening on ${port}`)
  console.log('Press CTRL + C to stop server')
})
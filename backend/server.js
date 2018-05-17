const request = require('request')
const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')

let pokemonList = []
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
  request("https://pokeapi.co/api/v2/pokemon/?limit=151", ((error, res, body) => {
  let apiData = JSON.parse(body)
  pokemonList.push(apiData.results)
}))
  res.send({ pokemonList, caughtPokemon } )
})

app.post('/', (req, res) => {
  caughtPokemon = req.body.caughtPokemon

  res.json({ success: true })
})

// port listening
app.listen(port, function () {
  console.log(`listening on ${port}`)
  console.log('Press CTRL + C to stop server')
})
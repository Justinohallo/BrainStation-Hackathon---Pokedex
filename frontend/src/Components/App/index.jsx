import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

import PokemonList from '../PokemonList'
import PokemonDetails from "../PokemonDetails";
import CaughtPokemon from '../CaughtPokemon'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonList: [],
      pokemonIndex: 0,
      caughtPokemon: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/')
      .then((response) => {
        console.log(response.data.pokemonList)
        this.setState({
          pokemonList: response.data.pokemonList,
          caughtPokemon: response.data.caughtPokemon
        })
      })
  }

  componentDidUpdate() {
    const { pokemonList, caughtPokemon } = this.state
    axios.post('http://localhost:5000/', { pokemonList, caughtPokemon })
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }

  sendId = (cutId) => {
    this.setState({
      pokemonIndex: cutId
    })
  }

  addPokemon = (name, i) => {
    const { caughtPokemon } = this.state

    caughtPokemon.push({
      name: name,
      index: i
    })

    this.setState({
      caughtPokemon
    })
  }

  nextPokemon = () => {
    this.setState({
      pokemonIndex: Number(this.state.pokemonIndex) + 1
     } )
  } 

  previousPokemon = () => {
    this.setState({
      pokemonIndex: Number(this.state.pokemonIndex) -1
    })
  }

  searchPokemon = (e, pokemon) => {
    if (!pokemon) {
      alert('What do you want to catch?')
      return
    } this.setState({ pokemon: pokemon })
  }

  render() {
    const { pokemonList, caughtPokemon } = this.state

    return (
      <div className="center">
          <div>
            <ul id="nav-mobile">
              <Link id='homeLink' className="black-text" to="/">
                PoKéMoN
              </Link>
              <CaughtPokemon caughtPokemon={caughtPokemon} pokemonList={this.props.pokemonList} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <PokemonList
                      pokemonList={pokemonList}
                      sendId={this.sendId}
                      addPokemon={this.addPokemon}
                    />
                  )}
                />
                <Route
                  path="/:pokeid"
                  render={props => (
                    <PokemonDetails
                      pokemonList={pokemonList}
                      id={this.state.pokemonIndex}
                      addPokemon={this.addPokemon}
                      nextPokemon={this.nextPokemon}
                      previousPokemon={this.previousPokemon}
                    />
                  )}
                />
              </Switch>
            </ul>
          </div>
      </div>
    );
  }
}

export default App;

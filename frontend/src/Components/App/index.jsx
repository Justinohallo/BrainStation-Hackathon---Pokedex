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

  addPokemon = (name) => {
    const { caughtPokemon } = this.state

    caughtPokemon.push({
      name: name
    })

    this.setState({
      caughtPokemon
    })
  }

  searchPokemon = (e, pokemon) => {
    if (!pokemon) {
      alert('What do you want to catch?')
      return
    } this.setState({ 
      pokemon: pokemon 
    })
    let searchId = this.props.pokemonList.map(pokemonProps => {
      if (pokemon === pokemonProps.name) {
        let index = pokemonProps.url.substr(34);
        let searchIndex = index.substr(0, index.length - 1);
        this.setState({ pokemonIndex: searchIndex })
        console.log(this.state.pokemonIndex)
      }
    })

  }

  render() {
    const { pokemonList, caughtPokemon } = this.state

    return (
      <div className="containter center">
        <CaughtPokemon caughtPokemon={caughtPokemon} />
        <nav className="black-text white">
          <div>
            <ul id="nav-mobile">
              <Link className="black-text" to="/">
                POKEMON
              </Link>
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
                    />
                  )}
                />
              </Switch>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

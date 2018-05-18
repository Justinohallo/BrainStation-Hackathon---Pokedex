import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import PokemonList from '../PokemonList'
import PokemonDetails from "../PokemonDetails";
import CaughtPokemon from '../CaughtPokemon'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIndex: 0,
      pokemon: '',
      caughtPokemon: []
    }
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
    const { caughtPokemon } = this.state 
    const { pokemonList } = this.props

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

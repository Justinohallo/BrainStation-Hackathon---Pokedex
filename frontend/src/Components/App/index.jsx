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
      caughtPokemon: []
    }
  }

  sendId = (cutId) => {
    this.setState({ pokemonIndex: cutId })
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

  render() {
    return (
      <div className="containter center">
        <CaughtPokemon caughtPokemon={this.state.caughtPokemon}/>
        <nav className='black-text white'>
          <div>
            <ul id="nav-mobile">
              <Link className='black-text' to="/">POKEMON</Link>
              <Switch>
                <Route exact path="/" render={props => <PokemonList pokemonList={this.props.pokemonList} sendId={this.sendId} addPokemon={this.addPokemon}/>} />
                <Route path="/:pokeid" render={props => <PokemonDetails pokemonList={this.props.pokemonList} id={this.state.pokemonIndex} addPokemon={this.addPokemon}/>} />
              </Switch>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

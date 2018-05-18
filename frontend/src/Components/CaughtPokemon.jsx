import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class CaughtPokemon extends Component {
  render() {
    let caughtPokemonJSX = this.props.caughtPokemon.map((pokemon) => {
      return (
        <div>
          <p>{pokemon.name}</p>
        </div>
      )
    })
    return (
      <div>
        <h3>Your PokeBall</h3>
        {caughtPokemonJSX}
      </div>
    );
  }
}

export default CaughtPokemon;

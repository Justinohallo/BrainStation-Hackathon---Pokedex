import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class CaughtPokemon extends Component {
  render() {
    const { caughtPokemon } = this.props

    let caughtPokemonJSX = caughtPokemon.map((pokemon, i) => {
      return (
        <div key={i} className="col s6 m2">
          <p id='caughtPokemon'>{pokemon.name.toUpperCase()}</p>
        </div>
      );
    });

    return (
      <div>
        <img id="catchPhrase" src="/img/catch.png" alt="catch" />
        <div className="row">{caughtPokemonJSX}</div>
      </div>
    );
  }
}

export default CaughtPokemon;

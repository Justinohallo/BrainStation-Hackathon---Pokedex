import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class CaughtPokemon extends Component {
  render() {
    let caughtPokemonJSX = this.props.caughtPokemon.map(pokemon => {
      return (
        <div className="col s6 m2">
          <p id='caughtPokemon'>{pokemon.name.toUpperCase()}</p>
        </div>
      );
    });

    return (
      <div>
        <img id="catchPhrase" src="/img/catch.png" alt="catch" />
        <div className="row">
          {caughtPokemonJSX}
        </div>
      </div>
    );
  }
}

export default CaughtPokemon;

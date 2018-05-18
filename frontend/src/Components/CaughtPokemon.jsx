import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class CaughtPokemon extends Component {
  render() {
    let caughtPokemonJSX = this.props.caughtPokemon.map(pokemon => {
      return (

        <div className='col s1'>
          <p>{pokemon.name.toUpperCase()}</p>
        </div>
      );
    });

    return (
      <div>
        <img id='catchPhrase' src='/img/catch.png' alt='catch'/>
        <div className='row'>
        {caughtPokemonJSX}
        </div>
      </div>
    );
  }
}

export default CaughtPokemon;

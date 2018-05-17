import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class PokemonDetails extends Component {
  render() {
    let id = this.props.id - 1
    return (
      <div className='black-text'>
        <p>{this.props.pokemonList[id].name}</p>
        <img src={`/img/${[this.props.id]}.png`} alt='pokemon' />
      </div>
    );
  }
}

export default PokemonDetails;

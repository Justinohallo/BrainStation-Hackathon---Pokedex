import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class PokemonDetails extends Component {
  render() {
    let id = this.props.id - 1;
    console.log("id props", this.props.id);
    console.log("id local", id);
    console.log(this.props.pokemonList);
    console.log(this.props.pokemonList[0]);
    console.log(this.props.pokemonList[id].name);
    return (
      <div className="black-text row">
              {this.props.id}
        <p className='pokeName'>{this.props.pokemonList[id].name.toUpperCase()}</p>
      <div className='col m4'>
        <i
          onClick={() => {
            this.props.previousPokemon(this.props.id);
          }}
          className="material-icons"
        >
          chevron_left
        </i>
        </div>
        <div className='col m4'>
        <img id='detailPokemon' src={`/img/${[this.props.id]}.png`} alt="pokemon" />
        </div>
        <div className='col m4'>
        <i
          onClick={() => {
            this.props.nextPokemon(this.props.id);
          }}
          className="material-icons"
        >
          chevron_right
        </i>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;

//There is an issue when we refresh the page. The props is no longer being passed into this function.
//When we reset the page, the state changes and returns back to 0.
// We are then reducing the id by 1, which results in a props of 0 and a local id of -1.
// When we refresh the page, we are losing the state of the pokemon, which is the index.
// The index starts at 1 and when we refresh the page, we have id at 0-1 which is 0.
// Need a function

import React, { Component } from "react";

class PokemonDetails extends Component {
  render() {
    let id = this.props.id - 1;

    return (
      <div className="black-text row">
        {this.props.id}
        <p className="pokeName">
          {this.props.pokemonList[id].name.toUpperCase()}
        </p>
        <div className="col m4">
          <i id='arrowIcon' 
            onClick={() => {this.props.previousPokemon(this.props.id);}}
            className="large material-icons"
          >
            chevron_left
          </i>
        </div>
        <div className="col m4">
          <img
            id="detailPokemon"
            src={`/img/${[this.props.id]}.png`}
            alt="pokemon"
          />
        </div>
        <div className="col m4">
          <i  id='arrowIcon' 
            onClick={() => {this.props.nextPokemon(this.props.id);}}
            className="large material-icons"
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

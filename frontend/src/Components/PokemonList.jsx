import React, { Component } from "react";
import { Route } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

// https://pokeapi.co/api/v2/pokemon/1/

class PokemonList extends Component {
  render() {
    let listJsx = this.props.pokemonList.map((pokemon, i) => {
      let id = pokemon.url.substr(34);
      let cutId = id.substr(0, id.length - 1);
      return (
        <div>
          <img src={`/img/${cutId}.png`} alt="pokemon" />
          <p> {pokemon.name} </p>
        </div>
      );
    });
    return (
      <div className="black-text">
        {listJsx}
        <Route path="/:pokeid" render={() => <PokemonDetails />} />
      </div>
    );
  }
}

export default PokemonList;

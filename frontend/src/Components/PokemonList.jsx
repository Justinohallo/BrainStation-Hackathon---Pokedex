import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemonSearch: "" };
  }

  searchPokemon = pokemonSearch => {
    console.log(pokemonSearch)
    if (!pokemonSearch) {
      alert("What do you want to catch?");
      return;
    }
    this.setState({ pokemon: pokemonSearch });
    console.log(this.state.pokemon)

  };

  render() {
    
    let filteredPokemon = this.props.pokemonList.filter(pokemon => {
      return pokemon.name.indexOf(this.state.pokemon) !== -1;
    });

    filteredPokemon = this.props.pokemonList.map((pokemon, i) => {
      let id = pokemon.url.substr(34);
      let cutId = id.substr(0, id.length - 1);
      return (
        <div key={i}>
          <Link
            to={`/${cutId}`}
            onClick={() => {
              this.props.sendId(cutId);
            }}
          >
            <img src={`/img/${cutId}.png`} alt="pokemon" />
            <p> {pokemon.name} </p>
          </Link>
        </div>
      );
    });

    return (
      <div className="black-text">
        <div className="container center">
          <form id="name-form" className="col s12">
            <div className="input-field col s6">
              <input
                ref="name"
                type="text"
                // value={this.state.pokemonSearch}
                onChange={() => {
                  this.searchPokemon(this.refs.name.value);
                }}
              />
              <label htmlFor="POKEMON">POKEMON</label>
            </div>
          </form>
        </div>
        {filteredPokemon}
        <Route path="/:pokeid" render={() => <PokemonDetails />} />
      </div>
    );
  }
}

export default PokemonList;

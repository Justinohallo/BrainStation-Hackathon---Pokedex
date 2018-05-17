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
        <Pokemon key={i} pokemon={pokemon} cutId={cutId} addPokemon={this.props.addPokemon} sendId={this.props.sendId}/>
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

class Pokemon extends Component {
  handleClick = () => {
    this.props.addPokemon(
      this.props.pokemon.name
    )
  }

  render() {
    return (
      <div>
        <Link to={`/${this.props.cutId}`} onClick={() => { this.props.sendId(this.props.cutId) }}>
          <img src={`/img/${this.props.cutId}.png`} alt="pokemon" />
          <p> {this.props.pokemon.name} </p>
        </Link>
        <button onClick={this.handleClick}>Caught!</button>
      </div>
    )
  }
}

export default PokemonList;

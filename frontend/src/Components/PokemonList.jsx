import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

// https://pokeapi.co/api/v2/pokemon/1/

class PokemonList extends Component {
  render() {
    let listJsx = this.props.pokemonList.map((pokemon, i) => {
      let id = pokemon.url.substr(34);
      let cutId = id.substr(0, id.length - 1);
      return (
        <Pokemon key={i} pokemon={pokemon} cutId={cutId} addPokemon={this.props.addPokemon} sendId={this.props.sendId}/>
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

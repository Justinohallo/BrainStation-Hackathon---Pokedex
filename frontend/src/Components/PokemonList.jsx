import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";
import "../index.css";

function search(pokemonSearch) {
  return function(pokemon) {
    return (
      pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()) ||
      !pokemonSearch
    );
  };
}

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonSearch: "",
      currentPokemon: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler = event => {
    this.setState({
      pokemonSearch: event.target.value
    });
  };

  render() {
    const { pokemonList, addPokemon, sendId } = this.props;
    const { pokemonSearch } = this.state;
    let listJSX = pokemonList
      .filter(search(pokemonSearch))
      .map((pokemon, i) => {
        let id = pokemon.url.substr(34);
        let cutId = id.substr(0, id.length - 1);
        return (
          <Pokemon
            key={i}
            pokemon={pokemon}
            cutId={cutId}
            addPokemon={addPokemon}
            sendId={sendId}
          />
        );
      });

    return (
      <div className="black-text container center">
        <form id="name-form" className="col s12">
          <div className="input-field col s6">
            <input
              type="text"
              // value={this.state.pokemonSearch}
              onChange={this.searchHandler}
            />
            <label htmlFor="SEARCH POKEMON">SEARCH POKEMON</label>
          </div>
        </form>
        <div className="row">{listJSX}</div>
      </div>
    );
  }
}

class Pokemon extends Component {
  handleClick = () => {
    const { addPokemon, pokemon } = this.props;
    addPokemon(pokemon.url);
    this.songPlayer.play();
  };

  render() {
    const { cutId, pokemon, sendId } = this.props;
    return (
      <div className="col m3">
        <div className="card">
          <div className="card-image">
            <div className="card-content center-align">
              <Link
                className="black-text"
                to={`/${cutId}`}
                onClick={() => {
                  sendId(cutId);
                }}
              >
                <img
                  className="responsive-img"
                  src={`/img/${cutId}.png`}
                  alt="pokemon"
                />
                <p className="pokeName"> {pokemon.name.toUpperCase()} </p>
              </Link>
              <img
                className="waves-effect waves-light white pokeballImg"
                onClick={this.handleClick}
                id="pokeball"
                src="/img/pokeball.png"
                alt="pokeball"
              />
              <audio ref={element => (this.songPlayer = element)}>
                <source src="/audio/pokeball.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonList;

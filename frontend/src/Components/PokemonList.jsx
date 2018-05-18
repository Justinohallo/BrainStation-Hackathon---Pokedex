import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

function search (pokemonSearch) {
  return function(pokemon){
    return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()) || !pokemonSearch;
  }
}

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemonSearch: "" 
    };
    this.searchHandler=this.searchHandler.bind(this)
  }

  searchHandler = (event) => {
    this.setState({ 
      pokemonSearch: event.target.value
     });
  };

  render() {

    let listJSX = this.props.pokemonList.filter(search(this.state.pokemonSearch)).map((pokemon, i) => {
      let id = pokemon.url.substr(34);
      let cutId = id.substr(0, id.length - 1);
      return (
        <Pokemon key={i} pokemon={pokemon} cutId={cutId} addPokemon={this.props.addPokemon} sendId={this.props.sendId}/>
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
          <div className='row'>
            {listJSX}
        </div>
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
        <div className='row'>
        <div className='col m6'>
        <Link className='black-text' to={`/${this.props.cutId}`} onClick={() => { this.props.sendId(this.props.cutId) }}>
          <img src={`/img/${this.props.cutId}.png`} alt="pokemon" />
          <p> {this.props.pokemon.name} </p>
        </Link>
        <img onClick={this.handleClick} id='pokeball' src='/img/pokeball.png' alt='pokeball'/>
      </div>
      </div>
      </div>
    )
  }
}

export default PokemonList;

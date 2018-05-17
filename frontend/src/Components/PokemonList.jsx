import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PokemonDetails from './PokemonDetails'

class PokemonList extends Component {
    render() {
      
      return (
        <div className='black-text'>
          <Link to='/pokemondetails'>
          <img src='/img/1.png' alt='test'/>
          </Link>
          <Route path='/:pokeid'render={() => <PokemonDetails />}/>
        </div>
      );
    }
  }
  
  export default PokemonList;
  
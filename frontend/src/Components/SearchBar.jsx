import React, { Component } from "react";
import {Route, Switch, Link} from 'react-router-dom'
import PokemonList from '../PokemonList'
import PokemonDetails from "../PokemonDetails";

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }



  render() {
    return (
      <div className="containter center">
        <nav className='black-text white'>
          <div>
            <ul id="nav-mobile">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

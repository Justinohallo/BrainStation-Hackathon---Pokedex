import React, { Component } from "react";
import {Route, Switch, Link} from 'react-router-dom'
// import PokemonDetails from '../PokemonDetails'
import PokemonList from '../PokemonList'
import PokemonDetails from "../PokemonDetails";

class App extends Component {
  render() {
    return (
      <div className="containter center">
        <nav className='black-text white'>
          <div>
            <ul id="nav-mobile">
            <Link className='black-text' to="/">POKEMON</Link>
              <Switch>
                <Route exact path="/" render={props=> <PokemonList pokemonList={this.props.pokemonList}/>}/>
                <Route path="/:pokeid" render={props=> <PokemonDetails pokemonList={this.props.pokemonList}/>} />
              </Switch>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

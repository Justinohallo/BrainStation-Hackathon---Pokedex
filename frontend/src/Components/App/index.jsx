import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
// import PokemonDetails from '../PokemonDetails'
import PokemonList from "../PokemonList";
import PokemonDetails from "../PokemonDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
    };
  }

  sendId = cutId => {
    this.setState({ pokemonIndex: cutId });
  };

  render() {

    return (
      <div className="containter center">
        <nav className="black-text white">
          <div>
            <ul id="nav-mobile">
              <Link className="black-text" to="/">
                POKEMON
              </Link>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <PokemonList
                      pokemonList={this.props.pokemonList}
                      sendId={this.sendId}
                    />
                  )}
                />
                <Route
                  path="/:pokeid"
                  render={props => (
                    <PokemonDetails
                      pokemonList={this.props.pokemonList}
                      id={this.state.pokemonIndex}
                    />
                  )}
                />
              </Switch>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

// let searchId = this.props.pokemonList.map(pokemonProps => {
// if (pokemon === pokemonProps.name) {
//   let index = pokemonProps.url.substr(34);
//   let searchIndex = index.substr(0, index.length - 1);
//   this.setState({pokemonIndex:searchIndex}) }
                  {/* {filteredPokemon.map(pokemon => {
                    console.log()
                    return <PokemonDetails pokemon={pokemon}/>
                  })} */}
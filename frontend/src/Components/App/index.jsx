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
      pokemon: ''
    };
  }

  sendId = cutId => {
    this.setState({ pokemonIndex: cutId });
  };

  searchPokemon = (e, pokemon) => { 
    if(!pokemon) {
      alert('What do you want to catch?')
      return
    } this.setState({pokemon:pokemon})
    let searchId = this.props.pokemonList.map(pokemonProps => {
      if (pokemon === pokemonProps.name) {
        let index = pokemonProps.url.substr(34);
        let searchIndex = index.substr(0, index.length - 1);
        this.setState({pokemonIndex:searchIndex})
        console.log(this.state.pokemonIndex)
      }
    })
    
  }

  render() {
    return (
      <div className="containter center">
        <nav className="black-text white">
          <div>
            <ul id="nav-mobile">
              <Link className="black-text" to="/">
                POKEMON
              </Link>
              <div className="container center">
                <form id="name-form" className="col s12">
                  <div className="input-field col s6">
                    <input ref="name" type="text" />
                    <label htmlFor="POKEMON">POKEMON</label>
                  </div>
                </form>
                <Link to={`/${this.state.pokemonIndex}`}
                  className="btn waves-effect waves-light teal accent-2 btn"
                  onClick={e=>{ this.searchPokemon(e, this.refs.name.value)}}
                >
                  CATCH 'EM
                </Link>
              </div>
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

import React, { Component } from "react";
import axios from 'axios'
import { Route, Link } from "react-router-dom";

// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeData: []
    };
  }

  componentWillMount() {
    let urlUpdateState = this.props.urlUpdateState
    urlUpdateState(this.props.match.params.pokeid)
  }

  componentDidMount() {
    axios.get("http://localhost:8080/pokeData").then(response => {
      this.setState({
        pokeData: response.data
      })
      const { match } = this.props
      // might be in the wrong spot
    })
  }

  render() {
    const {
      pokemonList,
      previousPokemon,
      nextPokemon,
      match,
      addPokemon
    } = this.props

    const { pokeData } = this.state;

    let id = this.props.id - 1;
    let pokemonGroup = this.props.pokemonList
    let pokemonName = this.props.match.params.pokeid

    if (pokeData.length < 1) {
      return <img id="ball" src="/img/ball.gif" alt="loading" />;
    }

    return (
      <div className="black-text row">
        <div className='col m4'>
          <Link to={`${[this.props.id]}`}>
            <i id='arrowIcon'
              onClick={() => {
                previousPokemon(this.props.id);
              }}
              className="large material-icons"
            >

              chevron_left
        </i> </Link>
        </div>
        <div className="col m4">
          <div className="card">
            <div className="row">
              <img
                id="detailPokemon"
                src={`/img/${[this.props.id]}.png`}
                alt="pokemon"
              />
            </div>
            <div className="row">
              <span id="pokeCardName" className="card-title pokeName">
                {pokemonList[id].name.toUpperCase()}
              </span>
            </div>
            <div className="card-content">
              {/* <div className="row">
                <img
                  className="waves-effect waves-light white pokeballImg"
                  onClick={() => {
                    addPokemon(pokemon.url);
                    this.songPlayer.play();
                  };}
                  id="pokeball"
                  src="/img/pokeball.png"
                  alt="pokeball"
                />
                <audio ref={element => (this.songPlayer = element)}>
                  <source src="/audio/pokeball.mp3" type="audio/mpeg" />
                </audio>
              </div> */}
              <div className="row">
                <div className="col s4">
                  <p>{pokeData[id].height}</p>
                </div>
                <div className="col s4">
                  <p>{pokeData[id].type[0].toUpperCase()}</p>
                </div>
                <div className="col s4">
                  <p>{pokeData[id].weight}</p>
                </div>
              </div>
              <p>{pokeData[id].description}</p>
            </div>
          </div>
        </div>
        <div className='col m4'>
          <Link to={`${[this.props.id]}`}>
            <i id='arrowIcon'
              onClick={() => {
                nextPokemon(this.props.id);
              }}
              className="large material-icons"
            >
              chevron_right
        </i>
          </Link>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;

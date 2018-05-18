import React, { Component } from "react";
import axios from 'axios'
// import { Route, Link } from "react-router-dom";
// import PokemonList from './PokemonList'

class PokemonDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokeData: []
    }
    console.log(this.state.pokeData)
  }

  componentDidMount() {
    axios.get('http://localhost:8080/pokeData')
    .then((response) => {
      this.setState({
        pokeData: response.data
      })
    })
  }

  render() {
    const { 
      pokemonList, 
      previousPokemon, 
      nextPokemon 
    } = this.props

    const { pokeData } = this.state

    let id = this.props.id - 1;

    if(pokeData.length < 1){
      return (
        <p> Loading... </p>
      )
    }
    
    return (
      <div className="black-text row">
        {this.props.id}
        <p className='pokeName'>{pokemonList[id].name.toUpperCase()}</p>
        <div className='col m4'>
          <i id='arrowIcon'
            onClick={() => {
              previousPokemon(this.props.id);
            }}
            className="material-icons"
          >
            chevron_left
        </i>
        </div>
        <div className='col m4'>
          <img id='detailPokemon' src={`/img/${[this.props.id]}.png`} alt="pokemon" />
          <p>{pokeData[id].description}</p>
          <p>{pokeData[id].type[0]}</p>
          <p>{pokeData[id].height}</p>
          <p>{pokeData[id].weight}</p>
        </div>
        <div className='col m4'>
          <i id='arrowIcon'
            onClick={() => {
              nextPokemon(this.props.id);
            }}
            className="material-icons"
          >
            chevron_right
        </i>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;

//There is an issue when we refresh the page. The props is no longer being passed into this function.
//When we reset the page, the state changes and returns back to 0.
// We are then reducing the id by 1, which results in a props of 0 and a local id of -1.
// When we refresh the page, we are losing the state of the pokemon, which is the index.
// The index starts at 1 and when we refresh the page, we have id at 0-1 which is 0.
// Need a function

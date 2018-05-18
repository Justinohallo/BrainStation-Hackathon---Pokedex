import React, { Component } from "react";

import '../index.css'

class CaughtPokemon extends Component {
  render() {
    const { caughtPokemon } = this.props

    let caughtPokemonJSX = caughtPokemon.map((pokemon, i) => {
      const pokemonId = pokemon.url.substr(34);
      const cutPokemonId = pokemonId.substr(0, pokemonId.length - 1);
      return (
        <div key={i} className="col s6 m2">
          <img className="responsive-img" src={`/img/${cutPokemonId}.png`} alt="pokemon" />
        </div>
      );
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    return (
      <div>
        <img id="catchPhrase" src="/img/catch.png" alt="catch" />
        <button className="accordion">
        </button>
        <div className="panel">
          <div className="row">{caughtPokemonJSX}</div>
        </div>
      </div>
    );
  }
}

export default CaughtPokemon;

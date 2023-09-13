const idPokeName = document.getElementById("idPokeName")
const idPokeImage = document.getElementById("idPokeImage")
const pokemonHeight = document.getElementById("pokemonHeight")
const pokemonWeight = document.getElementById("pokemonWeight")
const pokemonAbility = document.getElementById("pokemonAbility")
const pokemonMove = document.getElementById("pokemonMove")

const urlParams = new URLSearchParams(window.location.search);
const pokemonEscolhido = urlParams.get("pokeDetalhes") 

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonEscolhido}`)
    .then((response) => response.json())
    .then((jsonBody) => {
        //console.log(jsonBody.name);
        idPokeName.innerHTML = jsonBody.name
        idPokeNumber.innerHTML += jsonBody.id
        idPokeImage.src = jsonBody.sprites.other.dream_world.front_default
        pokemonHeight.innerHTML += jsonBody.height
        pokemonWeight.innerHTML += jsonBody.weight
        pokemonAbility.innerHTML += jsonBody.abilities.map((i) => i.ability.name)
        pokemonMove.innerHTML += jsonBody.moves[0].move.name
    })


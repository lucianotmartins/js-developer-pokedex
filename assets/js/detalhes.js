const idPokeName = document.getElementById("idPokeName")
const idPokeImage = document.getElementById("idPokeImage")


fetch('https://pokeapi.co/api/v2/pokemon/6')
    .then((response) => response.json())
    .then((jsonBody) => {
        console.log(jsonBody.sprites.other.dream_world.front_default);
        idPokeName.innerHTML = jsonBody.name
        idPokeImage.src = jsonBody.sprites.other.dream_world.front_default
    })

    
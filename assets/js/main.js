const pokeName = document.getElementById('pokemon-name')
const showPoke = document.getElementById('showPoke')
const imgPokemone = document.getElementById("img_pokemone")
showPoke.addEventListener("click", showPokemon)


//! $obj{"official-artwork"}.front_default
// .object["official-artwork"].front_default)


function showPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value}`)
        .then(response => response.json())
        .then(json => console.log(json.sprites.other["official-artwork"].front_default))
}

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())

    // .then(allpokemon => console.log(allpokemon))

    .then(allpokemon => console.log(allpokemon.results[0].name))
    // .then(allpokemon => console.log(allpokemon.count))
  }
//   fetchKantoPokemon()

// function fetchKantoPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())
//     .then(function(allpokemon){
//         allpokemon.results.forEach(function(pokemon){
//             fetchPokemonData(pokemon);
//         })
//     })
// }

   fetchKantoPokemon()
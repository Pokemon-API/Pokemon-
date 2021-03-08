const pokeName = document.getElementById('pokemon-name')
const showPoke = document.getElementById('showPoke')
const imgPokemone = document.getElementById("img_pokemone")
const nameOfPokemon = document.getElementById("name")
const colorPika = document.getElementById("color_pika")
const elementPika = document.getElementById("element_pika")
const expPika = document.getElementById("exp_pika")
const stats = document.getElementById("stats")


showPoke.addEventListener("click", showPokemon)


//! $obj{"official-artwork"}.front_default
// .object["official-artwork"].front_default)


function showPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.sprites.other["official-artwork"].front_default) 
            console.log(json.name) 
            console.log(json.base_experience) 
            console.log(json.moves[0].version_group_details[0].version_group.name) 
            console.log(json.types[0].type.name) 
            console.log("hp: " + json.stats[0].base_stat) 
            console.log("attack:: " + json.stats[1].base_stat) 
            console.log("defence: " + json.stats[2].base_stat) 
            console.log("%cnot in the card:", "color:red") 
            console.log("ability1: " + json.abilities[0].ability.name) 
            console.log("ability2: " + json.abilities[1].ability.name) 

            console.log("weight: " + (json.weight/10) + " kg") 
            console.log("height: " + (json.height*10) + " cm" ) 




            let hp_pok = json.stats[0].base_stat
            let attack_pok = json.stats[1].base_stat
            let defence_pok = json.stats[2].base_stat

            imgPokemone.src = json.sprites.other["official-artwork"].front_default
            nameOfPokemon.innerHTML = json.name
            colorPika.innerHTML = "Color: " + json.moves[0].version_group_details[0].version_group.name

            //* different number of elements:
            let elementsList = json.types
            elementPika.innerHTML = "Strength in: "
            for(let i = 0; i<elementsList.length;i++){
            elementPika.innerHTML +=  elementsList[i].type.name +"/"
            }
                  
            expPika.innerHTML = "Exp : " + json.base_experience
            stats.innerHTML = "Hp: " + hp_pok + " / Atk: " + attack_pok + " / Def: " + defence_pok
        })
}






// function fetchKantoPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())

//     // .then(allpokemon => console.log(allpokemon))

//     .then(allpokemon => console.log(allpokemon.results[0].name))
//     // .then(allpokemon => console.log(allpokemon.count))
//   }
// //   fetchKantoPokemon()

// // function fetchKantoPokemon(){
// //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
// //     .then(response => response.json())
// //     .then(function(allpokemon){
// //         allpokemon.results.forEach(function(pokemon){
// //             fetchPokemonData(pokemon);
// //         })
// //     })
// // }

//    fetchKantoPokemon()
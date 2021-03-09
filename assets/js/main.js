const pokeName = document.getElementById('pokemon-name')
const showPoke = document.getElementById('showPoke')
const imgPokemone = document.getElementById("img_pokemone")
const nameOfPokemon = document.getElementById("name")
const colorPika = document.getElementById("color_pika")
const elementPika = document.getElementById("element_pika")
const expPika = document.getElementById("exp_pika")
const stats = document.getElementById("stats")


showPoke.addEventListener("click", showPokemon)

//todo     TESTING

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(json => console.log(json))


//todo     TESTING2  
//! possibility to get the evaluation

fetch('https://pokeapi.co/api/v2/evolution-chain/25/')
    .then(response => response.json())
    .then(json => console.log(json))




function showPokemon() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.sprites.other["official-artwork"].front_default)
            console.log(json.name)
            console.log(json.base_experience)


            //! should be removed - not all pokemons has it(id: 888 ...):
            //! red-blue, gold-silver etc...   :
            // console.log(json.moves[0].version_group_details[0].version_group.name) 


            console.log(json.types[0].type.name)
            console.log("hp: " + json.stats[0].base_stat)
            console.log("attack:: " + json.stats[1].base_stat)
            console.log("defence: " + json.stats[2].base_stat)
            console.log("%cnot in the card:", "color:red")

            let abilitiesCount = json.abilities

            for (let i = 0; i < abilitiesCount.length; i++) {
                console.log("ability1: " + json.abilities[i].ability.name)

            }

            // console.log("ability1: " + json.abilities[0].ability.name) 
            // console.log("ability2: " + json.abilities[1].ability.name) 

            console.log("weight: " + (json.weight / 10) + " kg")
            console.log("height: " + (json.height * 10) + " cm")




            let hp_pok = json.stats[0].base_stat
            let attack_pok = json.stats[1].base_stat
            let defence_pok = json.stats[2].base_stat

            imgPokemone.src = json.sprites.other["official-artwork"].front_default
            nameOfPokemon.innerHTML = json.name.toUpperCase()

            //! see line 26-28 colors are not always awailable
            // colorPika.innerHTML = "Color: " + json.moves[0].version_group_details[0].version_group.name

            //* different number of elements:
            let elementsList = json.types
            elementPika.innerHTML = "Strength in: "
            for (let i = 0; i < elementsList.length; i++) {
                elementPika.innerHTML += elementsList[i].type.name + "/"
                if (elementsList[0].type.name == "electric") {
                    elementPika.style.color = "yellow"
                } else if (elementsList[0].type.name == "grass") {
                    elementPika.style.color = "green"
                } else if (elementsList[0].type.name == "fire") {
                    elementPika.style.color = "red"
                } else if (elementsList[0].type.name == "water") {
                    elementPika.style.color = "darkblue"
                } else if (elementsList[0].type.name == "normal") {
                    elementPika.style.color = "#333"
                }
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
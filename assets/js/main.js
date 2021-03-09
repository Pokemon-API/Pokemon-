const pokeName = document.getElementById('pokemon-name')
const showPoke = document.getElementById('showPoke')
const imgPokemone = document.getElementById("img_pokemone")
const nameOfPokemon = document.getElementById("name")
const colorPika = document.getElementById("color_pika")
const elementPika = document.getElementById("element_pika")
const expPika = document.getElementById("exp_pika")
const stats = document.getElementById("stats")
const card = document.getElementById("card")
const heightPika = document.getElementById("height_pika")
const weightPika = document.getElementById("weight_pika")

showPoke.addEventListener("click", showPokemon)

pokeName.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        showPokemon()
    }
})

function showPokemon() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`)
        .then(response => response.json())
        .then(json => {

            //todo   "abilities": 
            // let abilitiesCount = json.abilities
            // for (let i = 0; i < abilitiesCount.length; i++) {
            //     console.log("ability1: " + json.abilities[i].ability.name)
            // }
            card.style.display = "flex";
            heightPika.innerHTML = "height: " + (json.height * 10) + " cm"
            weightPika.innerHTML = "weight: " + (json.weight / 10) + " kg"

            let hp_pok = json.stats[0].base_stat
            let attack_pok = json.stats[1].base_stat
            let defence_pok = json.stats[2].base_stat

            imgPokemone.src = json.sprites.other["official-artwork"].front_default
            nameOfPokemon.innerHTML = json.name.toUpperCase()

            //* different number of elements:
            let elementsList = json.types
            elementPika.innerHTML = "Strength in: "
            for (let i = 0; i < elementsList.length; i++) {
                elementPika.innerHTML += elementsList[i].type.name + "/"
                if (elementsList[0].type.name == "electric") {
                    card.style.backgroundColor = "#FFBF00"
                    card.style.color = "black"
                } else if (elementsList[0].type.name == "grass") {
                    card.style.backgroundColor = "#09BC8A"
                    card.style.color = "black"

                } else if (elementsList[0].type.name == "fire") {
                    card.style.backgroundColor = "#FF8484"
                    card.style.color = "black"

                } else if (elementsList[0].type.name == "water") {
                    card.style.backgroundColor = "#2374AB"
                    card.style.color = "white"

                } else if (elementsList[0].type.name == "ground") {
                    card.style.backgroundColor = "#654236"
                    card.style.color = "white"
                } else {
                    card.style.backgroundColor = "#D1CAA1"
                    card.style.color = "black"
                }
            }
            expPika.innerHTML = "Exp: " + json.base_experience
            stats.innerHTML = "Hp: " + hp_pok + " / Atk: " + attack_pok + " / Def: " + defence_pok
        })
}
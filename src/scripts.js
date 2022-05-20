//variables
const URL = "https://pokeapi.co/api/v2/pokemon/?limit=100"
const d = document
const pokemonContainer = d.querySelector(".pokemons")
const search = d.querySelector("#input_pokemon")
let magicMonsters = []

//Pintar la data
const imprimirPokemons = (monster) => {

        const cardContainer = document.createElement("div")
        cardContainer.classList.add("imgystats")

        let cardBody = d.createElement("div")
        let name = d.createElement("p")
        let pokeID = d.createElement("p")
        let weight = d.createElement("p")
        let imgContainer = d.createElement("div")
        let imgPokemon = d.createElement("img")
        imgContainer.classList.add("imgpoke")
        imgPokemon.setAttribute("src", monster.sprites.front_default)

        pokeID.innerText = `ID: ${monster.id}`
        name.innerText = `Name: ${monster.name}`
        weight.innerText = `Weight: ${monster.weight}`
        const listAbilities = abilities1or2(monster)
        const listTypes = types1or2(monster)
        
        // console.log(cardContainer)

        pokemonContainer.appendChild(cardContainer)
        cardContainer.appendChild(imgContainer)    
        imgContainer.appendChild(imgPokemon)
        cardContainer.appendChild(cardBody)
        cardBody.append(pokeID, name, listTypes, weight, listAbilities)
}

// search.addEventListener("keyup", (event) => {
//     pokemonContainer.innerHTML = ""
//     busquedaPokemon(pokemones, event.target.value)
// })

// const busquedaPokemon = (Allmonster, pokemonSearch) => {
//     let pokemonFound = Allmonster.filter((pokemon)=>{
//         return pokemon.name.toLocaleLowerCase().includes(pokemonSearch.toLocaleLowerCase())
//     })
//     imprimirPokemons(pokemonFound)
// }

//Habilidades del pokemon
const abilities1or2 = (monster) => {
    let abilities = d.createElement("ul")
    monster.abilities.forEach(element => {
        let habilidad = d.createElement("li")
        habilidad.innerText = `Especial ability(s):${element.ability.name}`
        abilities.appendChild(habilidad)
    });
    return abilities
}

//Tipos del pokemon
const types1or2 = (monster) => {
    let type = d.createElement("ul")
    monster.types.forEach(element => {
        let tipo = d.createElement("li")
        tipo.innerText = `Type(s):${element.type.name}`
        type.appendChild(tipo)
    });
    return type
}

//Envio de data
const pokeData = () => {
    fetch(URL)
        .then( res => res.json() )
        .then( pokemons => {
            return pokemons
        })
        .then(bestias => {
            const poke = bestias.results.map(bestia => {
                return bestia.url
            });
            return poke
        })
        .then(poke => {
            const pokeInfo = poke.map(element => {
                fetch(element)
                .then(respuesta => respuesta.json())
                // .then(pokemones => console.log(pokemones))
                .then(pokemones => imprimirPokemons(pokemones))
            });
        })
        .catch(error => console.error(error))
}

pokeData()
//Url
const URL = "https://pokeapi.co/api/v2/pokemon/"

//Documento
const d = document

//Pintar la data
const imprimirPokemons = (monster) => {
        const col = d.createElement("div")
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "my-2")
        const pokemonContainer = d.createElement("div")
        const cardContainer = d.createElement("div")
        let cardBody = d.createElement("div")
        let name = d.createElement("p")
        let pokeID = d.createElement("p")
        let weight = d.createElement("p")
        let imgContainer = d.createElement("div")
        let imgPokemon = d.createElement("img")
        imgPokemon.setAttribute("src", monster.sprites.front_default)

        pokeID.innerText = `ID: ${monster.id}`
        name.innerText = `Name: ${monster.name}`
        weight.innerText = `Weight: ${monster.weight}`
        const listAbilities = abilities1or2(monster)
        const listTypes = types1or2(monster)
        
        console.log(pokemonContainer)

        pokemonContainer.appendChild(col)
        col.appendChild(cardContainer)
        imgContainer.appendChild(imgPokemon)    
        cardContainer.appendChild(imgContainer)
        cardContainer.appendChild(cardBody)
        cardBody.append(pokeID, name, listTypes, weight, listAbilities)
}

//Habilidades del pokemon
const abilities1or2 = (monster) => {
    let abilities = d.createElement("ul")
    monster.abilities.forEach(element => {
        let habilidad = d.createElement("li")
        habilidad.innerText = `Especial ability(s): ${element.ability.name}`
        abilities.appendChild(habilidad)
    });
    return abilities
}

//Tipos del pokemon
const types1or2 = (monster) => {
    let type = d.createElement("ul")
    monster.types.forEach(element => {
        let tipo = d.createElement("li")
        tipo.innerText = `Type(s): ${element.type.name}`
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
                .then(pokemones => imprimirPokemons(pokemones))
            });
        })
        .catch(error => console.error(error))
}

pokeData()
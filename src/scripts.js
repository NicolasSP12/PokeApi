//Constantes
const URL = "https://pokeapi.co/api/v2/pokemon/"
const d = document
let pokemons = []
//Funciones
const imprimirPokemons = () => {
    pokemons.forEach( id => {
        const col = d.createElement("div")
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "my-2")

        let name = d.createElement("p")
        console.log(pokemons.name)
    })
}




const pokeData = (id) => {
    fetch(URL)
        .then(res=> res.json())
        .then(data => pokemons = data)
        .then(() => console.log(pokemons))
        .catch(error => console.error(error))

}

pokeData()
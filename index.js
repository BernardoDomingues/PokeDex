document.getElementById('fetchbutton').addEventListener('click', fetchPokemon);


function fetchPokemon() {
    let search = document.getElementById('txtbox').value.toLowerCase()
    const myRequest = `https://pokeapi.co/api/v2/pokemon/${search}` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    }).catch(ex => {
        alert("Este Pokemon não existe.")
        console.clear();
    })
    .then(data => {
        let image = data.sprites.front_default
        let image2 = data.sprites.back_default
        let name = data.forms[0].name
        let id_number = data.id
        let type1 = data.types[0].type.name
        let type2 = " "
        if(data.types.length == 2) {
            type2 = data.types[1].type.name
        }
        let height = (data.height)/10
        let weight = (data.weight)/10
        let attack = data.stats[1].base_stat
        let defense = data.stats[2].base_stat      
        let life = data.stats[0].base_stat
        let speed = data.stats[5].base_stat
        let ability = data.abilities[0].ability.name
        let ability2 = data.abilities[1].ability.name
        let output = `
                <img src=${image}>
                <img src=${image2}>
                <h3> Nome: ${name} </h3>
                <h5> [${type1}] [${type2}] </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Altura ${height} m(s)</h5>
                <h5> Peso: ${weight} kg(s)</h5>
                <h5> Ataque : ${attack} </h5>
                <h5> Defesa : ${defense} </h5>              
                <h5> Vida : ${life} </h5>
                <h5> Velocidade : ${speed} </h5>
                <h5> Habilidade 1 : ${ability} </h5>
                <h5> Habilidade 2 : ${ability2} </h5>

            `;
        document.getElementById('fact-box').innerHTML = output;
    })
    console.log("button was clicked")
        
};

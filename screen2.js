fetchPikachu()
fetchBulbasaur()
fetchCharizard()
fetchGreninja()
fetchLucario()
fetchSnorlax()
fetchGarchomp()
fetchUmbreon()
fetchDragonite()
fetchPidgeot()


function fetchPikachu() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/pikachu` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box').innerHTML = output;
    })      
};
function fetchBulbasaur() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/bulbasaur` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box2').innerHTML = output;
    })   
};
function fetchCharizard() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/charizard` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box3').innerHTML = output;
    })   
};
function fetchGreninja() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/greninja` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box4').innerHTML = output;
    })     
};
function fetchLucario() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/lucario` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box5').innerHTML = output;
    })     
};
function fetchSnorlax() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/snorlax` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box6').innerHTML = output;
    })   
};
function fetchGarchomp() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/garchomp` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box7').innerHTML = output;
    })       
};
function fetchUmbreon() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/umbreon` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box8').innerHTML = output;
    })     
};
function fetchDragonite() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/dragonite` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box9').innerHTML = output;
    })     
};
function fetchPidgeot() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/pidgeot` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box10').innerHTML = output;
    })
         
};
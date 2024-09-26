let planets = []
let planetData = document.getElementById('planetData');
let searchInput = document.querySelector('input')
let listPerson = document.getElementById('listPerson')

async function printResident(apiLink){
    
    let res = await fetch(apiLink);
    let persona = await res.json();
    

    let li = document.createElement('li');

    li.innerHTML = `<p><strong>Name: </strong>${persona.name}<strong> Birth year: </strong>${persona.birth_year}</p>`;

    listPerson.appendChild(li);
}


function printData(planet){
    listPerson.innerHTML = ''
    planetData.innerHTML = `<h3>${planet.name}</h3>
    <p><strong>Climate:</strong> ${planet.climate}</p>
    <p><strong>Population:</strong> ${planet.population}</p>
    <p><strong>Terreno:</strong> ${planet.terrain}</p>`
    ;       

    planet.residents.forEach(apiLink =>{
        apiLinktext = `${apiLink}`;
        console.log(apiLinktext);
        printResident(apiLinktext);
    })
}

function printButtons(){
    let planetNames = document.getElementById('planetsButtons');
    planets.forEach(planet => {
        let button = document.createElement('button');
        button.innerHTML = `${planet.name}`;
        planetNames.appendChild(button);

        button.addEventListener('click', () =>{
            printData(planet);
        });
    });           
       
}

async function printConsole(){
    let res = await fetch('https://swapi.dev/api/planets/?format=json');
    let data = await res.json();
    planets = data.results;
    console.log(data.results);    
    printButtons();
};


searchInput.addEventListener("input", e => {
    let value = e.target.value;
    finalPlanet = null
    planets.forEach(planet =>{
        if (planet.name === value) {
            finalPlanet = planet
            printData(planet)    
        }
    });
    if(finalPlanet === null){
        planetData.innerHTML = `<p>not found</p>`
        listPerson.innerHTML = ''
    } else{        
        printData(finalPlanet)
        
    }
});

printConsole();


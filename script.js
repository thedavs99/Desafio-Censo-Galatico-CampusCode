let planets = document.getElementById('planets-button');
let planetData = document.getElementById('planet-data')

async function printData(){

    let res = await fetch('https://swapi.dev/api/planets/?format=json');

    let data = await res.json()

    console.log(data);    

    data.results.forEach(planet => {
        let button = document.createElement('button');
        button.innerHTML = `${planet.name}`;
        planets.appendChild(button);

        button.addEventListener('click', () =>{
            planetData.innerHTML = `<h3>${planet.name}</h3>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>`
            ;
        });
    });
};
printData();
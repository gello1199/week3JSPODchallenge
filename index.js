const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=200"
const btnPoke = document.getElementById(`poke-btn`);
const pokeUl = document.getElementById(`list`);

btnPoke.addEventListener(`click`, fetchPoke)

function fetchPoke() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(pokeList)
}

function pokeList(pokeData) {
    const pokeList = pokeData.results;
    for(poke of pokeList) {
        const pokeLi = document.createElement('li')
        pokeLi.innerText = poke.name;
        // debugger
        pokeUl.appendChild(pokeLi);

        pokeLi.addEventListener(`mouseover`, function(e) {
            e.target.style.color = `red`;
        })

        pokeLi.addEventListener(`click`, function() {
            const subLi = document.createElement('li')
            subLi.innerHTML = poke.url;
            pokeLi.appendChild(subLi);
            // debugger;
        })
    }
}
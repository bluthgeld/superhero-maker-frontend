document.addEventListener('DOMContentLoaded', init )

const HERO_URL = "http://localhost:3000/api/v1/heroes"

function init() {

  getHeroes()

}

function getHeroes() {
  return fetch(HERO_URL)
  .then(resp => resp.json())
  .then(heroes => renderHeroes(heroes))
}


function renderHeroes(heroes) {
  
 console.log(heroes)

}

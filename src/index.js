document.addEventListener('DOMContentLoaded', init )

const HERO_URL = "http://localhost:3000/api/v1/heroes"
const POWER_URL = "http://localhost:3000/api/v1/powers"
const main = document.querySelector('main')

function init() {

  getHeroes()

}

function getHeroes() {
  return fetch(HERO_URL)
  .then(resp => resp.json())
  .then(heroes => renderHeroes(heroes))
}


function renderHeroes(heroes) {

 renderHome()
 let h = 0
 heroes.forEach (hero => {
   h += 1
   renderHero(hero, h)
 })

}

function renderHome() {

  let jumboDiv = document.createElement(`div`)
  jumboDiv.className = "jumbotron text-center"
  let jumboH1 = document.createElement('h1')
  jumboH1.innerText = "Superhero Maker!"
  let jumboP = document.createElement('p')
  jumboP.innerText = "Your Kid has Incredible Powers!  Let the World Know!"
  let jumboBtn = document.createElement('button')
  jumboBtn.className = "btn btn-primary btn-lg"
  jumboBtn.innerText = "Superhero Maker!"
  jumboBtn.addEventListener("click", createHero)
  let contDiv = document.createElement('div')
  contDiv.className = "container"
  let rowDiv = document.createElement('div')
  rowDiv.className = "row"
  let oneDiv = document.createElement('div')
  oneDiv.className = "col-sm-4"
  oneDiv.id = "col-one"
  let twoDiv = document.createElement('div')
  twoDiv.className = "col-sm-4"
  twoDiv.id = "col-two"
  let threeDiv = document.createElement('div')
  threeDiv.className = "col-sm-4"
  threeDiv.id = "col-three"
  main.append(jumboDiv, contDiv)
  jumboDiv.append(jumboH1, jumboP, jumboBtn)
  contDiv.appendChild(rowDiv)
  rowDiv.append(oneDiv, twoDiv, threeDiv)

}

function renderHero(hero, h) {

  let one = document.getElementById('col-one')
  let two = document.getElementById('col-two')
  let three = document.getElementById('col-three')

  let cardDiv = document.createElement('div')
  cardDiv.className = "card mb-3"
  one.appendChild(cardDiv)
  let h3 = document.createElement('h3')
  h3.className = "card-header"
  h3.innerText = hero.hero_name
  let h5 = document.createElement('h5')
  h5.className = "card-title"
  h5.innerHTML = `${hero.first_name} ${hero.last_name}`
  let h6 = document.createElement('h6')
  h6.className = "card-subtitle text-muted"
  h6.innerText = "This is my Motto"
  let cardBody1 = document.createElement('div')
  cardBody1.className = "card-body"
  let img = document.createElement('img')
  img.src = hero.img
  let cardBody2 = document.createElement('div')
  cardBody2.className = "card-body"
  let p = document.createElement('p')

  p.className = "card-text"
  p.innerText = hero.origin_story

  let heroBtn = document.createElement('button')
  heroBtn.className = "btn btn-link"
  heroBtn.innerText = "View"
  heroBtn.addEventListener("click", () => viewHero(hero))
  cardBody1.append(h5, h6)
  cardBody2.append(p)
  cardDiv.append(h3, cardBody1, img, cardBody2, heroBtn)

}

function viewHero(hero) {

  console.log(hero)

}

function createHero() {

  main.innerHTML = ""
  console.log("I'm in your app creating heroes")

}

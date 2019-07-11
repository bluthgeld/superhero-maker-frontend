document.addEventListener('DOMContentLoaded', init )

const HERO_URL = "http://localhost:3000/api/v1/heroes"
const POWER_URL = "http://localhost:3000/api/v1/powers"
const main = document.querySelector('main')

const arrOne = [1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100]
const arrTwo = [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98]
const arrThree = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99]

function init() {

  getHeroes()

}

function getHeroes() {
  return fetch(HERO_URL)
  .then(resp => resp.json())
  .then(heroes => renderHeroes(heroes))
}


function renderHeroes(heroes) {
 main.innerHTML = ""
 renderHome()
 let h = 0
 heroes.forEach (hero => {
   h += 1
   renderHeroCard(hero, h)
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
  jumboBtn.innerText = "Let's Do This!"
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

function renderHeroCard(hero, h) {

  let one = document.getElementById('col-one')
  let two = document.getElementById('col-two')
  let three = document.getElementById('col-three')

  let cardDiv = document.createElement('div')
  cardDiv.className = "card mb-3"
  cardDiv.id = `hero-card-${h}`
  let h3 = document.createElement('h3')
  h3.className = "card-header"
  h3.innerText = hero.hero_name
  let h5 = document.createElement('h5')
  h5.className = "card-title"
  h5.innerText = hero.motto
  let cardBody1 = document.createElement('div')
  cardBody1.className = "card-body"
  let img = document.createElement('img')
  img.src = hero.image
  let cardBody2 = document.createElement('div')
  cardBody2.className = "card-body"
  let p = document.createElement('p')

  p.className = "card-text"
  p.innerText = hero.origin_story

  let heroBtn = document.createElement('button')
  heroBtn.className = "btn btn-link"
  heroBtn.innerText = "View"
  heroBtn.addEventListener("click", () => renderHeroFull(hero))

  //append elements to div
  cardBody1.append(h5)
  cardBody2.append(p)
  cardDiv.append(h3, cardBody1, img, cardBody2, heroBtn)


  //append card to one of three column based on the value of h
  if (arrOne.includes(h)) {
    one.appendChild(cardDiv)
  } else if (arrTwo.includes(h)) {
    two.appendChild(cardDiv)
  } else {
    three.appendChild(cardDiv)
  }
}


function renderHeroFull(hero) {
  main.innerHTML = ""
  let heroJumboDiv = document.createElement('div')
  heroJumboDiv.className = "jumbotron text-center"
  let heroJumboH1 = document.createElement('h1')
  heroJumboH1.innerText = hero.hero_name
  let mottoJumboH3 = document.createElement('h3')
  mottoJumboH3.innerText = hero.motto

  let heroRow = document.createElement('div')
  heroRow.className = "row justify-content-lg-center"
  let heroDiv = document.createElement('div')
  heroDiv.className = "col-lg-6"
  heroRow.appendChild(heroDiv)

  let nameH2 = document.createElement('h2')
  nameH2.innerText = "Secret Identity"
  let nameP = document.createElement('p')
  nameP.innerText = `${hero.first_name} ${hero.last_name}`

  let costumeH2 = document.createElement('h2')
  costumeH2.innerText = "Costume Colors"
  let costumeP = document.createElement('p')
  costumeP.innerText = `${hero.hero_name}'s costume is ${hero.color_one.toUpperCase()} and ${hero.color_two.toUpperCase()}.`

  let originH2 = document.createElement('h2')


  let powersH2 = document.createElement('h2')
  powersH2.innerText = `${hero.hero_name}'s Incredible Powers`
  hero.powers.forEach( power => {
    let powerH3 = document.createElement('h3')
    powerH3.id = power.id
    powerH3.innerText = power.name
    powersH2.append(powerH3)
    power.hero_powers.forEach(level => {
      levelH5 = document.createElement('h5')
      levelH5.innerText = `Power Level is ${level.power_level}`
      powerH3.append(levelH5)
    })
  })

  let editHeroBtn = document.createElement('button')
  editHeroBtn.className = "btn btn-primary btn-lg"
  editHeroBtn.innerText = "Edit Hero!"
  editHeroBtn.addEventListener('click', () => editHero(hero))

  heroDiv.append(nameH2, nameP, costumeH2, costumeP, powersH2, editHeroBtn)
  main.append(heroJumboDiv, heroRow)
  heroJumboDiv.append(heroJumboH1, mottoJumboH3)
}


function createHero() {
  main.innerHTML = ""
  heroForm()
}


function heroForm(hero) {
  //form header
  let formJumboDiv = document.createElement('div')
  formJumboDiv.className = "jumbotron text-center"
  let formJumboH1 = document.createElement('h1')
  formJumboH1.innerText = "The Superhero Form!"
  //page div
  let rowDiv = document.createElement('row')
  rowDiv.className = "row justify-content-md-center"
  let formDiv = document.createElement('div')
  formDiv.className = "col-md-3"

  //building the form
  let formTag = document.createElement('form')
  let fieldSet = document.createElement('fieldset')

  let formGroupDiv = document.createElement('div')
  formGroupDiv.className = "form-group"

  //email address
  let emailLabel = document.createElement('label')
  emailLabel.innerText = "Email Address"
  let emailInput = document.createElement('input')
  emailInput.id = "parents_email"
  emailInput.className = "form-control"

  //Secret Identity first name

  let firstNameLabel = document.createElement('label')
  firstNameLabel.innerText = "First Name"
  let firstName = document.createElement('input')
  firstName.id = "first_name"
  firstName.className = "form-control"

  //Secret Identity last Name

  let lastNameLabel = document.createElement('label')
  lastNameLabel.innerText = "Last Name"
  let lastName = document.createElement('input')
  lastName.id = "last_name"
  lastName.className = "form-control"

  //superhero Name


  let heroLabel = document.createElement('label')
  heroLabel.innerText = "Your Superhero Name!"
  let heroName = document.createElement('input')
  heroName.id = "hero_name"
  heroName.className = "form-control"

  //Superhero motto

  let mottoLabel = document.createElement('label')
  mottoLabel.innerText = "Your Superhero Motto"
  let mottoName = document.createElement('input')
  mottoName.id = "motto"
  mottoName.className = "form-control"


  //costume colors color 1

  let colorSelectOneLabel = document.createElement('label')
  colorSelectOneLabel.innerText = "Select Color 1"
  let colorSelectOne = document.createElement('select')
  colorSelectOne.className = "form-control"
  colorSelectOne.id = "color_one"
  let optionRed1 = document.createElement('option')
  optionRed1.innerText = "Red"
  let optionOrange1 = document.createElement('option')
  optionOrange1.innerText = "Orange"
  let optionYellow1 = document.createElement('option')
  optionYellow1.innerText = "Yellow"
  let optionGreen1 = document.createElement('option')
  optionGreen1.innerText = "Green"
  let optionBlue1 = document.createElement('option')
  optionBlue1.innerText = "Blue"
  let optionIndigo1 = document.createElement('option')
  optionIndigo1.innerText = "Indigo"
  let optionViolet1 = document.createElement('option')
  optionViolet1.innerText = "Violet"
  let optionWhite1 = document.createElement('option')
  optionWhite1.innerText = "White"
  let optionBlack1 = document.createElement('option')
  optionBlack1.innerText = "Black"
  let optionSilver1 = document.createElement('option')
  optionSilver1.innerText = "Silver"
  let optionGold1 = document.createElement('option')
  optionGold1.innerText = "Gold"
  colorSelectOne.append(optionRed1, optionOrange1, optionYellow1, optionGreen1, optionBlue1, optionIndigo1, optionViolet1, optionWhite1, optionBlack1, optionSilver1, optionGold1)

  //costume color 2

  let colorSelectTwoLabel = document.createElement('label')
  colorSelectTwoLabel.innerText = "Select Color 2"
  let colorSelectTwo = document.createElement('select')
  colorSelectTwo.className = "form-control"
  colorSelectTwo.id = "color_two"
  let optionRed2 = document.createElement('option')
  optionRed2.innerText = "Red"
  let optionOrange2 = document.createElement('option')
  optionOrange2.innerText = "Orange"
  let optionYellow2 = document.createElement('option')
  optionYellow2.innerText = "Yellow"
  let optionGreen2 = document.createElement('option')
  optionGreen2.innerText = "Green"
  let optionBlue2 = document.createElement('option')
  optionBlue2.innerText = "Blue"
  let optionIndigo2 = document.createElement('option')
  optionIndigo2.innerText = "Indigo"
  let optionViolet2 = document.createElement('option')
  optionViolet2.innerText = "Violet"
  let optionWhite2 = document.createElement('option')
  optionWhite2.innerText = "White"
  let optionBlack2 = document.createElement('option')
  optionBlack2.innerText = "Black"
  let optionSilver2 = document.createElement('option')
  optionSilver2.innerText = "Silver"
  let optionGold2 = document.createElement('option')
  optionGold2.innerText = "Gold"
  colorSelectTwo.append(optionRed2, optionOrange2, optionYellow2, optionGreen2, optionBlue2, optionIndigo2, optionViolet2, optionWhite2, optionBlack2, optionSilver2, optionGold2)


  //origin story

  let originLabel = document.createElement('label')
  originLabel.innerText = "Origin Story"
  let originText = document.createElement('textarea')
  originText.className = "form-control"
  originText.id = "origin_story"


  //origin location

  let locationLabel = document.createElement('label')
  locationLabel.innerText = "Origin Location"
  let locationName = document.createElement('input')
  locationName.id = "origin_location"
  locationName.className = "form-control"

  //Month and Day of Inception, Birth, Creation, Materialization

  let dobLabel = document.createElement('label')
  dobLabel.innerText = "Month/Day of Creation"
  let dobDate = document.createElement('input')
  dobDate.className = "form-control"
  dobDate.id = "dob"

  //upload/link and image

  let imgLabel = document.createElement('label')
  imgLabel.innerText = "URL to a Picture"
  let imgUrl = document.createElement('input')
  imgUrl.className = "form-control"
  imgUrl.id = "image"


  //Submit button

  let submitBtn = document.createElement('button')
  submitBtn.className = "btn btn-primary"
  submitBtn.innerText = "Create!"

  //Appending Elements to the Dom
  main.append(formJumboDiv, rowDiv)
  formJumboDiv.appendChild(formJumboH1)
  rowDiv.appendChild(formDiv)
  formDiv.appendChild(formTag)
  formTag.appendChild(fieldSet)
  fieldSet.appendChild(formGroupDiv)
  formGroupDiv.append(emailLabel, emailInput, firstNameLabel, firstName, lastNameLabel, lastName, heroLabel, heroName, mottoLabel, mottoName, colorSelectOneLabel, colorSelectOne, colorSelectTwoLabel, colorSelectTwo, originLabel, originText, locationLabel, locationName, dobLabel, dobDate, imgLabel, imgUrl, submitBtn)
  const form = document.querySelector("form")
  form.addEventListener("submit" , () => addHero(form))


}


function addHero(hero) {
  event.preventDefault();

  fetch(HERO_URL , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({
      first_name: hero.first_name.value,
      last_name: hero.last_name.value,
      hero_name: hero.hero_name.value,
      motto: hero.motto.value,
      parents_email: hero.parents_email.value,
      color_one: hero.color_one.value,
      color_two: hero.color_two.value,
      origin_story: hero.origin_story.value,
      origin_location: hero.origin_location.value,
      dob: hero.dob.value,
      image: hero.image.value
    })
  })
  .then(response => response.json())
  .then(hero => renderHeroFull(hero))
}


function editHero(hero) {
  main.innerHTML = ""
  heroForm(hero)
  //   form.dob.value = "january"
}


function getPowers() {
  return fetch(POWER_URL)
  .then(resp => resp.json())
  .then(powers => renderPowers(powers))
}

function renderPowers(powers) {
  main.innerHTML = ""
  renderPowerHome()
  let pow = 0
  powers.forEach(power => {
    pow += 1
    renderPowerCard(power, pow)
  })

}

function renderPowerHome() {


    let jumboPowerDiv = document.createElement(`div`)
    jumboPowerDiv.className = "jumbotron text-center"
    let jumboPowerH1 = document.createElement('h1')
    jumboPowerH1.innerText = "Powers!"
    let jumboPowerP = document.createElement('p')
    jumboPowerP.innerText = "These are all the Powers You Could Have"
    let contPowerDiv = document.createElement('div')
    contPowerDiv.className = "container"
    let rowPowerDiv = document.createElement('div')
    rowPowerDiv.className = "row"
    let onePowerDiv = document.createElement('div')
    onePowerDiv.className = "col-sm-4"
    onePowerDiv.id = "col-one"
    let twoPowerDiv = document.createElement('div')
    twoPowerDiv.className = "col-sm-4"
    twoPowerDiv.id = "col-two"
    let threePowerDiv = document.createElement('div')
    threePowerDiv.className = "col-sm-4"
    threePowerDiv.id = "col-three"
    main.append(jumboPowerDiv, contPowerDiv)
    jumboPowerDiv.append(jumboPowerH1, jumboPowerP)
    contPowerDiv.appendChild(rowPowerDiv)
    rowPowerDiv.append(onePowerDiv, twoPowerDiv, threePowerDiv)


}

function renderPowerCard(power, pow) {


    let onePower = document.getElementById('col-one')
    let twoPower = document.getElementById('col-two')
    let threePower = document.getElementById('col-three')

    let cardPowerDiv = document.createElement('div')
    cardPowerDiv.className = "card mb-3"
    cardPowerDiv.id = `power-card-${pow}`
    let powerH3 = document.createElement('h3')
    powerH3.className = "card-header"
    powerH3.innerText = power.name
    let cardPowerBody1 = document.createElement('div')
    cardPowerBody1.className = "card-body"
    let powerImg = document.createElement('img')
    powerImg.src = power.icon
    let cardPowerBody2 = document.createElement('div')
    cardPowerBody2.className = "card-body"
    let powerH5 = document.createElement('h5')
    powerH5.className = "card-title"
    powerH5.innerText = power.description



    //append elements to div
    cardPowerBody2.append(powerH5)
    cardPowerDiv.append(powerH3, cardPowerBody1, powerImg, cardPowerBody2)


    //append card to one of three column based on the value of pow
    if (arrOne.includes(pow)) {
      onePower.appendChild(cardPowerDiv)
    } else if (arrTwo.includes(pow)) {
      twoPower.appendChild(cardPowerDiv)
    } else {
      threePower.appendChild(cardPowerDiv)
    }
  }

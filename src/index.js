document.addEventListener('DOMContentLoaded', init )

const HERO_URL = "http://localhost:3000/api/v1/heroes"
const POWER_URL = "http://localhost:3000/api/v1/powers"
const HP_URL = "http://localhost:3000/api/v1/hero_powers"
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
  img.setAttribute("style","height: auto; width: 100%; display: block; margin: auto;")
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
  let fullhero = hero.id
  let heroJumboDiv = document.createElement('div')
  heroJumboDiv.className = "jumbotron text-center"
  let heroJumboH1 = document.createElement('h1')
  heroJumboH1.innerText = hero.hero_name
  let mottoJumboH3 = document.createElement('h3')
  mottoJumboH3.innerText = hero.motto

  let heroRow = document.createElement('div')
  heroRow.className = "row justify-content-lg-center"
  let heroDiv = document.createElement('div')
  heroDiv.className = "col-md-6"
  heroRow.appendChild(heroDiv)
  let heroCardDiv = document.createElement('div')
  heroCardDiv.className = "card mb-3"
  heroDiv.appendChild(heroCardDiv)
  let heroH3 = document.createElement('h3')
  heroH3.className = "card-header"
  heroH3.innerText = hero.hero_name
  let heroImage = document.createElement('img')
  heroImage.src = hero.image
  heroImage.setAttribute("style","height: auto; width: 100%; display: block;")


  let cardBodyA = document.createElement('div')
  cardBodyA.className = "card-body"
  let cardH51 = document.createElement('h5')
  cardH51.className = "card-title"
  cardH51.innerText = `Secret Identity: ${hero.first_name} ${hero.last_name}`

  let cardH52 = document.createElement('h5')
  cardH52.className = "card-title"
  cardH52.innerText = `${hero.hero_name}'s Costume Colors are ${hero.color_one} and ${hero.color_two}`

  let cardH53 = document.createElement('h5')
  cardH53.className = "card-title"
  cardH53.innerText = `Origin Location: ${hero.origin_location}`

  let cardH54 = document.createElement('h5')
  cardH54.className = "card-title"
  cardH54.innerText = `Origin Story:`

  let cardP = document.createElement('p')
  cardP.className = "card-text"
  cardP.innerText = `${hero.origin_story}`

  let cardH55 = document.createElement('h5')
  cardH55.className = "card-title"
  cardH55.innerText = `Birth/Inception/Materialization Date: ${hero.dob}`

  let cardFooter = document.createElement('div')
  cardFooter.className = "card-footer"
  cardFooter.setAttribute("style","text-align: center;")
  let editHeroBtn = document.createElement('button')
  editHeroBtn.className = "btn btn-link"
  editHeroBtn.innerText = "Edit Hero!"
  editHeroBtn.addEventListener('click', () => editHero(hero))
  let deleteHeroBtn = document.createElement('button')
  deleteHeroBtn.className = "btn btn-link"
  deleteHeroBtn.innerText = "Delete Hero!"
  deleteHeroBtn.addEventListener('click', () => deleteHero(hero))

//define the header and div for the powers
  let cardBodyB = document.createElement('div')
  cardBodyB.className = "card-body"
  let cardH56 = document.createElement('h5')
  cardH56.className = "card-title"
  cardH56.innerText = "Incredible Powers"


  //page div
  let powerRowDiv = document.createElement('row')
  powerRowDiv.className = "row justify-content-md-center"
  let powerFormDiv = document.createElement('div')
  powerFormDiv.className = "col-md-3"

  //building the form
  let powerFormTag = document.createElement('form')
  powerFormTag.id = "add_power_form"
  let powerFieldSet = document.createElement('fieldset')
  let powerFormGroupDiv = document.createElement('div')
  powerFormGroupDiv.className = "form-group"
  powerRowDiv.appendChild(powerFormDiv)
  powerFormDiv.appendChild(powerFormTag)
  powerFormTag.appendChild(powerFieldSet)
  powerFieldSet.appendChild(powerFormGroupDiv)


  let powerSelect = document.createElement('select')
  powerSelect.className = "form-control"
  powerSelect.id = "power"
  let speed = document.createElement('option')
  speed.innerText = "Speed"
  speed.setAttribute("value","1")
  let energy = document.createElement('option')
  energy.innerText = "Energy"
  energy.setAttribute("value","2")
  let elasticity = document.createElement('option')
  elasticity.innerText = "Elasticity"
  elasticity.setAttribute("value","3")
  let invisible = document.createElement('option')
  invisible.innerText = "Invisibility"
  invisible.setAttribute("value","4")
  let weather = document.createElement('option')
  weather.innerText = "Weather Control"
  weather.setAttribute("value","5")
  let strength = document.createElement('option')
  strength.innerText = "Strength"
  strength.setAttribute("value","6")
  let tele = document.createElement('option')
  tele.innerText = "Telekinesis"
  tele.setAttribute("value","7")
  let flight = document.createElement('option')
  flight.innerText = "Flight"
  flight.setAttribute("value","8")
  let psychic = document.createElement('option')
  psychic.innerText = "Psychic Ability"
  psychic.setAttribute("value","9")
  let agility = document.createElement('option')
  agility.innerText = "Agility"
  agility.setAttribute("value","10")
  let resize = document.createElement('option')
  resize.innerText = "Resize"
  resize.setAttribute("value","11")
  let forcefield = document.createElement('option')
  forcefield.innerText = "Force Field"
  forcefield.setAttribute("value","12")
  let teleportation = document.createElement('option')
  teleportation.innerText = "Teleportation"
  teleportation.setAttribute("value","13")

  let powerLabel = document.createElement('label')
  powerLabel.innerText = "Set Power Level"
  let powerInput = document.createElement('input')
  powerInput.id = "power_level"
  powerInput.className = "form-control"
  let heroPowerId = document.createElement('input')
  heroPowerId.id = "heroId"
  heroPowerId.setAttribute("type", "hidden")
  heroPowerId.setAttribute("value", fullhero)
  let pwrBtn = document.createElement('button')
  pwrBtn.className = "btn btn-primary btn-sm"
  pwrBtn.id = fullhero
  pwrBtn.innerText = "Add"

  powerFormGroupDiv.append(powerSelect, powerLabel, powerInput, heroPowerId, pwrBtn)
  powerSelect.append(speed, energy, elasticity, invisible, weather, strength, tele, flight, psychic, agility, resize, forcefield, teleportation)

  let hpDiv = document.createElement('div')
  hpDiv.className = "card-body"
  hpDiv.id = "hpCardTarget"
  hpDiv.setAttribute("style","display: block; margin: auto;")

// loop through the hero's powers here and add them to the card
  hero.powers.forEach( power => {
    let hpCardDiv = document.createElement('div')
    hpCardDiv.className = "card mb-1"
    hpCardDiv.id =`hp-card-${power.id}`
    hpCardDiv.setAttribute("style","width: 25rem;")
    let hpH5 = document.createElement('h5')
    hpH5.className = "card-header"
    hpH5.innerText = power.name
    let cpCardBody1 = document.createElement('div')
    cpCardBody1.className = "card-body"
    let cpImage = document.createElement('img')
    cpImage.src = power.icon
    cpImage.setAttribute("style","height: auto; width: 95%; display: block; margin: auto;")
    let cpCardBody2 = document.createElement('div')
    cpCardBody2.className = "card-body"
    let cpH6 = document.createElement('h5')
    cpH6.className = "card-title"
    cpH6.innerText = power.description
    let cpCardBody3 = document.createElement('div')
    cpCardBody3.className = "card-body"
  //add hero powers here
    power.hero_powers.forEach(level => {
      if (level.hero_id === fullhero) {
        let cpH61 = document.createElement('h5')
        cpH61.className = "card-title"
        cpH61.innerText = `Power Level: ${level.power_level}`
        cpCardBody3.appendChild(cpH61)
      }

    })
    cpCardBody1.appendChild(cpImage)
    cpCardBody2.appendChild(cpH6)
    let powerFooter = document.createElement('div')
    powerFooter.className = "card-footer"
    powerFooter.setAttribute("style","text-align: center;")
    let deletePwrBtn = document.createElement('button')
    deletePwrBtn.className = "btn btn-link"
    deletePwrBtn.innerText = "Delete Power!"
    deletePwrBtn.addEventListener('click', () => deletePower(power))
    powerFooter.appendChild(deletePwrBtn)
    hpCardDiv.append(hpH5, cpCardBody1, cpCardBody2, cpCardBody3, powerFooter)
    hpDiv.append(hpCardDiv)

  })


  //append elements to div

  cardBodyA.append(cardH51, cardH52, cardH53, cardH54, cardP, cardH55)
  cardBodyB.append(cardH56)
  cardFooter.append(editHeroBtn, deleteHeroBtn)
  heroCardDiv.append(heroH3, heroImage, cardBodyA, cardBodyB, powerRowDiv, hpDiv, cardFooter)
  main.append(heroJumboDiv, heroRow)
  heroJumboDiv.append(heroJumboH1, mottoJumboH3)

  let addPowerForm = document.getElementById("add_power_form")
  addPowerForm.addEventListener("submit", () => addNewPower(addPowerForm))
}


function createHero() {
  main.innerHTML = ""
  heroForm()
}

function deleteHero(hero){
  console.log("delete me now")
}

function heroForm(hero) {

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

  if (hero) {

    //form header
    let formJumboDiv = document.createElement('div')
    formJumboDiv.className = "jumbotron text-center"
    let formJumboH1 = document.createElement('h1')
    formJumboH1.innerText = `Edit Superhero ${hero.hero_name}`

    let heroId = document.createElement('input')
    heroId.id = "heroId"
    heroId.setAttribute("type", "hidden")
    heroId.setAttribute("value", hero.id)


    //Submit button
    let submitBtn = document.createElement('button')
    submitBtn.className = "btn btn-primary"
    submitBtn.innerText = "Update!"

    //Appending Elements to the Dom
    main.append(formJumboDiv, rowDiv)
    formJumboDiv.appendChild(formJumboH1)
    rowDiv.appendChild(formDiv)
    formDiv.appendChild(formTag)
    formTag.appendChild(fieldSet)
    fieldSet.appendChild(formGroupDiv)
    formGroupDiv.append(heroId, emailLabel, emailInput, firstNameLabel, firstName, lastNameLabel, lastName, heroLabel, heroName, mottoLabel, mottoName, colorSelectOneLabel, colorSelectOne, colorSelectTwoLabel, colorSelectTwo, originLabel, originText, locationLabel, locationName, dobLabel, dobDate, imgLabel, imgUrl, submitBtn)


    let form = document.querySelector("form")
    form.addEventListener("submit" , () => updateHero(form))

    // for the edit, default values
    form.hero_name.value = hero.hero_name
    form.first_name.value = hero.first_name
    form.last_name.value = hero.last_name
    form.motto.value = hero.motto
    form.color_one.value = hero.color_one
    form.color_two.value = hero.color_two
    form.origin_story.value = hero.origin_story
    form.origin_location.value = hero.origin_location
    form.dob.value = hero.dob
    form.image.value = hero.image


  } else {

    //form header
    let formJumboDiv = document.createElement('div')
    formJumboDiv.className = "jumbotron text-center"
    let formJumboH1 = document.createElement('h1')
    formJumboH1.innerText = "The Superhero Form!"

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

    let form = document.querySelector("form")
    form.addEventListener("submit" , () => addHero(form))

  }

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

function updateHero(hero){
  event.preventDefault();
  let id = hero.heroId.value

  fetch(HERO_URL + "/" + `${id}` , {
    method: 'PATCH',
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
    powerImg.setAttribute("style","height: auto; width: 95%; display: block; margin: auto;")
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

  function addNewPower(form) {
    event.preventDefault();

      fetch(HP_URL , {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
          body: JSON.stringify({
          power_id: form.power.value,
          hero_id: form.heroId.value,
          power_level: form.power_level.value
        })
      })
      .then(response => response.json())
      .then(power => getPower(power))
  }

  function getPower(power) {
      let hero = power.hero_id
     fetch(POWER_URL + "/" + `${power.power_id}`)
    .then(resp => resp.json())
    .then(power => renderNewPower(power, hero))
  }

  function renderNewPower(power,hero) {
    let hpCardDiv = document.createElement('div')
    hpCardDiv.className = "card mb-1"
    hpCardDiv.id =`hp-card-${power.id}`
    hpCardDiv.setAttribute("style","width: 25rem;")
    let hpH5 = document.createElement('h5')
    hpH5.className = "card-header"
    hpH5.innerText = power.name
    let cpCardBody1 = document.createElement('div')
    cpCardBody1.className = "card-body"
    let cpImage = document.createElement('img')
    cpImage.src = power.icon
    cpImage.setAttribute("style","height: auto; width: 95%; display: block; margin: auto;")
    let cpCardBody2 = document.createElement('div')
    cpCardBody2.className = "card-body"
    let cpH6 = document.createElement('h5')
    cpH6.className = "card-title"
    cpH6.innerText = power.description
    let cpCardBody3 = document.createElement('div')
    cpCardBody3.className = "card-body"
  //add hero powers here
    power.hero_powers.forEach(level => {
      if (level.hero_id === hero) {
        let cpH61 = document.createElement('h5')
        cpH61.className = "card-title"
        cpH61.innerText = `Power Level: ${level.power_level}`
        cpCardBody3.appendChild(cpH61)
      }
    })
    cpCardBody1.appendChild(cpImage)
    cpCardBody2.appendChild(cpH6)
    hpCardDiv.append(hpH5, cpCardBody1, cpCardBody2, cpCardBody3)
    let hp_target = document.getElementById("hpCardTarget")
    hp_target.appendChild(hpCardDiv)
  }

function deletePower(power) {
  let id = power.id
  fetch(HP_URL + "/" + `${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
      body: JSON.stringify({
      id: id
    })
  })
  .then(response => response.json())
  .then(power => {
    let del = document.getElementById(`hp-card-${id}`)
    del.remove()
  })
}

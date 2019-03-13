
// enter a regex that will match return false for matches of world

regText1 = (string) => {
  myString = "hello world"
  let newRegEx = new RegExp(string)
  return newRegEx.test(myString)
}

console.log(regText1('hello'))
//returns true

//==================================

//the key is with either the duck or the goose! write a regEx that matches 'duck' OR 'goose'

regText2 = (string) => {
  myString = "The farm is full of mysterious animals who look like they're hiding something. Could it be the octopus? The pig? The cow? the goose!?"

  myString2 = "The farm is full of mysterious animals who look like they're hiding something. Could it be the duck? The pig? The cow? the rabbit!?"

  myString3 = "The farm is full of mysterious animals who look like they're hiding something. Could it be the chick? The pig? The cow? the rabbit!?"

  let newRegEx = new RegExp(string)

  let answer1 = newRegEx.test(myString)
  let answer2 = newRegEx.test(myString2)
  let answer3 = newRegEx.test(myString3)

  if(answer1 && answer2 && !answer3){
    return 'Follow that goose!'
  }
  else { return 'Follow that duck!'}
}

console.log(regText2('goose|duck'))
//returns Follow that goose!

//==================================

// The dastardly criminals have intercepted our message and changed the cases. Ugh it's so difficult to read now! Is there a clue? Write a regex that searches for the string 'clue' in any case.

regText3 = (string, flag) => {
  myString1 = "wHERe iS THe cLeW is the CLu HEre? hOW abOUt THis klUE Is ThIs the CEul? i bET That'S tHe CLuUe oVEr thERe. OR Is tHe clLUE heRE? WHerE iS tHAt DarN cIue?"

  myString2 = "wHERe iS THe cLeW is the CLu HEre? hOW abOUt THis klUE Is ThIs the CEul? i bET That'S tHe CLuUe oVEr thERe. OR Is tHe clUE heRE? WHerE iS tHAt DarN cIue?"

  myString3 = "wHERe iS THe cLeW is the CLu HEre? hOW abOUt THis klUE Is ThIs the CEul? i bET That'S tHe CLuUe oVEr thERe. OR Is tHe cleW heRE? WHerE iS tHAt DarN cIue?"

  let newRegEx = new RegExp(string,[flag])

  let answer1 = newRegEx.test(myString1)
  let answer2 = newRegEx.test(myString2)
  let answer3 = newRegEx.test(myString3)

  if(answer2 && !answer1 && !answer3){
    return "the clue is leading to the men's wearhouse"
  } else {
    return "the clue is leading to a live mouse!"
  }
}

console.log(regText3('clue', 'i'))
//returns the clue is leading to the men's wearhouse

//==================================

//not a great candidate for a game question tbh
regText4 = (string) => {
  myString = "I love crime, I simply love it so much <3"
  let newRegEx = new RegExp(string)
  return myString.match(newRegEx)
}

console.log(regText4('crime'))
//returns ["crime", index: 7, input: "I love crime, I simply love it so much <3", groups: undefined]

//==================================

// The street address of the safehouse is the number of knives in this message. How many knives are there here?

regText4 = (string, flag) => {
  myString = "knif gun candlestick candestick knife gun bomb cannon knife musket knife pistol knipe killer bee knife"
  let newRegEx = new RegExp(string,[flag])
  let answer = myString.match(newRegEx)
  if(answer.length === 4){
    return 'go to the boardwalk'
  } else {
    return 'go to the docks!'
  }
}

console.log(regText4('knife', 'g'))
// returns 'go to the boardwalk'

//==================================

//Uh oh, our wire keeps cutting out. Did the mob boss say he found a rat or a hat?

regText5 = (string, flag) => {
  myString = "Well well well, looks like we've found a hat"
  let newRegEx = new RegExp(string)
  let answer = myString.match(newRegEx)
  if(answer[0] === 'hat'){
    return 'just a hat, looks like this is a dead lead. Go back to the office.'
  } else {
    return 'Oh no! They found your source, go check up on him.'
  }
}

console.log(regText5('.at'))
//returns 'just a hat, looks like this is a dead lead. Go back to the office.'

//==================================


//The number of drop locations is the number of vowels! How many vowels in the string?

regText6 = (string, flag) => {
  myString = "Crime is my passion! I like to live, laugh, love and lime. And by lime of course I mean crime!"
  let newRegEx = new RegExp(string, flag)
  let answer = myString.match(newRegEx)
  if(answer.length === 31){
    return 'Head to the dump!'
  } else {
    return 'Go to the roof!'
  }
}

console.log(regText6('[aeiou]', 'ig'))
//returns 'Head to the dump!'


//==================================


//Ok gumshoe, time to break some codes! The criminals have hidden the location of their hideout by only using only capital letters. Search the string for capital letters.

regText6 = (string, flag) => {
  myString = "They'll never figure out the address to our secret location. How could they? Everyone know's they're dum-dums. Damn their good looks though, UM what did i just say? forget that they're ugly too! Peace out."
  let newRegEx = new RegExp(string, flag)
  return myString.match(newRegEx)
}
console.log(regText6('[A-Z]', 'g'))
//returns ["T", "H", "E", "D", "U", "M", "P"]


//==================================


// Oh shoot! Our wire cut out halfway through the confession. Can you find out what the criminal said after " I commited" and before "I hope I don't get arrested!"

regText7 = (string, flag) => {
  myString = "Oops I cut my finger, so much blood! It's like that time I commited murder. I hope I don't get arrested! My girlfriend would be so mad, we're in a very commited relationship."
  let newRegEx = new RegExp(string, flag)
  return myString.match(newRegEx)
}

console.log(regText7("I commited[a-z .!?]*I hope I don't get arrested!", "ig"))
//returns ["I commited murder. I hope I don't get arrested!"]

//tabs vs spaces would be a good challege

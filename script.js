
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
  myString = "the farm is full of mysterious animals who look like they're hiding something. Could it be the duck? The pig? The cow? the goose!?"
  let newRegEx = new RegExp(string)
  return newRegEx.test(myString)
}

console.log(regText2('goose|duck'))
//returns true

//==================================

// The dastardly criminals have intercepted our message and changed the cases. Ugh it's so difficult to read now! Is there a clue? Write a regex that searches for the string clue in any case.

regText3 = (string, flag) => {
  myString = "wHERe iS THe cLeW is the CLu HEre? hOW abOUt THis klUE Is ThIs the CEul? i bET That'S tHe CLuUe oVEr thERe. OR Is tHe clUE heRE? WHerE iS tHAt DarN cIue?"
  let newRegEx = new RegExp(string,[flag])
  return newRegEx.test(myString)
}

console.log(regText3('clue', 'i'))
//returns true

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
  myString = "knif gun candlestick candestick knife gun bomb cannon knife musket pistol knipe killer bee knife"
  let newRegEx = new RegExp(string,[flag])
  return myString.match(newRegEx)
}

console.log(regText4('knife', 'g'))
// returns ["knife", "knife", "knife"]
// choose between 4 knivey Way, 1 Knife Alley, 3 KnifeTown USA

//==================================

//Uh oh, our wire keeps cutting out. Did the mob boss say he found a rat or a hat?

regText5 = (string, flag) => {
  myString = "Well well well, looks like we've found a hat"
  let newRegEx = new RegExp(string)
  return myString.match(newRegEx)
}

console.log(regText5('.at'))
//returns ["hat", index: 41, input: "Well well well, looks like we've found a hat", groups: undefined]

//==================================


//The number of drop locations is the number of vowels! How many vowels in the string?

regText6 = (string, flag) => {
  myString = "Crime is my passion! I like to live, laugh, love and lime. And by lime of course I mean crime!"
  let newRegEx = new RegExp(string, flag)
  return myString.match(newRegEx)
}

console.log(regText6('[aeiou]', 'ig'))
//returns ["i", "e", "i", "a", "i", "o", "I", "i", "e", "o", "i", "e", "a", "u", "o", "e", "a", "i", "e", "A", "i", "e", "o", "o", "u", "e", "I", "e", "a", "i", "e"]


//==================================


//Ok gumshoe, time to break some codes! The criminals have hidden the location of their hideout by only using only capital letters. Search the string for capital letters.

regText6 = (string, flag) => {
  myString = "They'll never figure out the address to our secret location. How could they? Everyone know's they're dum-dums. Damn their good looks though, UM what did i just say? forget that they're ugly too. Peace out."
  let newRegEx = new RegExp(string, flag)
  return myString.match(newRegEx)
}
console.log(regText6('[A-Z]', 'g'))
//returns ["T", "H", "E", "D", "U", "M", "P"]


//==================================


// Oh shoot! Our wire cut out halfway through the confession. Can you find out what the criminal said before " I commited" and "I hope I don't get arrested!"

regText7 = (string, flag) => {
  myString = "Oops I cut my finger, so much blood! It's like that time I commited murder. I hope I don't get arrested! My girlfriend would be so mad, we're in a very commited relationship."
  let newRegEx = new RegExp(string, flag)
  console.log(newRegEx)
  return myString.match(newRegEx)
}

console.log(regText7("I commited[a-z .!?]*I hope I don't get arrested!", "ig"))
//returns ["I commited murder. I hope I don't get arrested!"]

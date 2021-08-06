// https://codepen.io/SaikatSafa/pen/BaRqbYo
Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
word = Quote.split(" ")

for (let i = 0; i < word.length; i++) {
	// if (word.indexOf('s') || word.indexOf('S')) {

	// }
	word[i] = word[i].replace('s', '$')
  	word[i] = word[i].replace('S', '$')
}

console.log(word.join(' '))

let newString = "sup bro how are you"
log = newString.split(" ")

for (let i = 0; i < log.length; i++) {
	log[i] = log[i].replace('s', '$')
	log[i] = log[i].replace('S', '$')
}

console.log(log.join(' '))

let logString = prompt("Log the new string to your screen")
log = logString.split(" ")

for (let i = 0; i < log.length; i++) {
	log[i] = log[i].replace('s', '$')
	log[i] = log[i].replace('S', '$')
}

console.log(log.join(' '))

// string1 = console.log(word.join(' '))
// string2 = console.log(log.join(' '))

console.log(word.join(' ').concat(log.join(' ')))


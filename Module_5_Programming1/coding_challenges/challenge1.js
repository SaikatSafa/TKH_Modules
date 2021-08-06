// https://codepen.io/SaikatSafa/pen/BaRqMVM?editors=0011
names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"]

first_name = []
last_name = []

for (let i = 0; i < names.length; i++) {
	let fullNameSplit = names[i].split(" ")
	for (let i = 0; i < 1; i++) {
		first_name.push(fullNameSplit[0])
		last_name.push(fullNameSplit[1])
	}
}

console.log(first_name)
console.log(last_name)
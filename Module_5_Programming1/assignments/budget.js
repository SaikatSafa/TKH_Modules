// https://codepen.io/SaikatSafa/pen/qBmJLWw
let weeklyIncome = parseInt(prompt("Enter your weekly income:"))
let foodCost = parseInt(prompt("Enter your food cost:"))
let housingCost = parseInt(prompt("Enter your housing cost:"))
let transportationCost = parseInt(prompt("Enter your transportation cost:"))
let otherCost = parseInt(prompt("Enter all of your other cost:"))
let saveYearly = parseInt(prompt("How much do you want to save in a year:"))

let saveWeekly = saveYearly / 52
let totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost
let leftWeekly = weeklyIncome - totalWeeklyCost

if (leftWeekly > saveWeekly) {
	console.log("You are on track")
}
else {
	console.log("You need to save " + (saveWeekly - leftWeekly) + " more a week")
}
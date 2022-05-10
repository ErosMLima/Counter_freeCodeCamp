let countEl = document.getElementById("count-el")

let count = 0

function increment() {
	count++
	countEl.innerText = count
}

function decrement() {
	count--
	countEl.innerText = count
}

function save() {
	console.log(count)
}
 







/*var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
}

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
	let totalTime = lap1 + lap2 + lap3
	console.log(totalTime)
}

console.log(totalTime) */



 
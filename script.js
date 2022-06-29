
document.getElementById("increment")
document.getElementById("reset")
document.getElementById("decrement")
document.getElementById("save")


let countEr = document.getElementById("number")
let saveEl = document.getElementById("entries")
 let count = 0;

 function increment() {
   count = count + 1
   countEr.innerText = count
 }

function reset() {
  countEr.innerText = 0
  count = 0
}
 function decrement() {
   count = count - 1
   countEr.innerText = count
 }
function save() {
  let contain = count + " - "
  saveEl.textContent += contain
  countEr.innerText = 0
  count = 0
}

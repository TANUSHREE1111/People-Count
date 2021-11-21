let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// console.log(saveEl)

let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count 
}


function save() {
    let cd = count + " - "
    saveEl.textContent += cd
    countEl.textContent = 0
    count = 0
}
console.log("Let's count people on the subway!")
console.log("The house always wins!");

let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

console.log(idInput);
console.log(colorInput);

let setCard = function(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    console.log(card);
}
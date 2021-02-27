const basicColors = [
    "red", "purple", "grey", "blue", "green", "orange", "yellow"
];

const btn = document.getElementById("click");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let index = getRandom();
    
    color.textContent = basicColors[index];
    document.body.style.backgroundColor = basicColors[index];
})

function getRandom() {
    return Math.floor(Math.random() * basicColors.length);
}
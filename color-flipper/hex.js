const hexChar = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
]

const hexMaxLength = 6;

const btn = document.getElementById("click");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hex = "#";
    for (let i = 0; i < hexMaxLength; i++) {
        hex += hexChar[getRandomChar()];
    }
    
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
})

function getRandomChar() {
    return Math.floor(Math.random() * hexChar.length);
}
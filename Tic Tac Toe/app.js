// Sabhi box button ko pakad rahe hain
let boxes = document.querySelectorAll(".box");

// Reset button ko pakad rahe hain
let resetBtn = document.getElementById("reset-btn");

// Current player ka pata rakhne ke liye ("X" ya "O")
let turn = "X";

// Game chalu hai ya nahi — isko check karne ke liye
let isGameOver = false;

// Winning combinations (3 row ya column ya diagonal same hone chahiye)
let winPatterns = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // left to right diagonal
    [2, 4, 6], // right to left diagonal
];

// Har ek box par click hone par kya hoga
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        // Agar box already fill hai ya game khatam ho gaya, to kuch mat karo
        if (box.innerText !== "" || isGameOver) {
            return;
        }

        // Current player's turn box mein likh do
        box.innerText = turn;

        // Check karo koi jeeta ya nahi
        checkWinner();

        // Turn change karo (X to O, O to X)
        turn = (turn === "X") ? "O" : "X";
    });
});

// Winner check karne wali function
function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            // Jeet gaya koi
            alert(`🎉 Player ${pos1} wins!`);
            isGameOver = true;

            // Winning boxes ka color change karte hain
            boxes[pattern[0]].style.backgroundColor = "#90ee90";
            boxes[pattern[1]].style.backgroundColor = "#90ee90";
            boxes[pattern[2]].style.backgroundColor = "#90ee90";
        }
    }
}

// Reset button pe click hote hi sab kuch reset ho jaaye
resetBtn.addEventListener("click", function () {
    // Sabhi boxes ko empty karo aur original background wapas lao
    boxes.forEach(function (box) {
        box.innerText = "";
        box.style.backgroundColor = "linear-gradient(135deg, #ffffff, #dcdcdc)";
    });

    // Turn wapas X se shuru karo
    turn = "X";
    isGameOver = false;
});

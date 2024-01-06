// script.js
// Moved counters variable to the global scope
let counters = [0, 0, 0, 0];

document.addEventListener('DOMContentLoaded', function () {
    const usersDiv = document.getElementById('users');
    const resetButton = document.getElementById('resetButton');

    // User names array
    const userNames = ['Pum', 'Pippi', 'Kusuma', 'Gopi'];

    // Create user elements
    userNames.forEach((name, index) => {
        let userDiv = document.createElement('div');
        userDiv.id = `user${index}`;
        userDiv.innerHTML = `${name}: <span>${counters[index]}</span> 
                             <button onclick="increment(${index})">+1</button>`;
        usersDiv.appendChild(userDiv);
    });

    // Reset button functionality
    resetButton.addEventListener('click', function () {
        counters = counters.map(() => 0);
        updateDisplay();
    });
});

// Function to increment counter
function increment(userIndex) {
    counters[userIndex]++;
    updateDisplay();
}

// Update the display
function updateDisplay() {
    counters.forEach((count, index) => {
        document.querySelector(`#user${index} span`).textContent = count;
    });
}


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    const usersDiv = document.getElementById('users');
    const resetButton = document.getElementById('resetButton');

    // Initialize counters for 4 users
    let counters = [0, 0, 0, 0];

    // Create user elements
    counters.forEach((_, index) => {
        let userDiv = document.createElement('div');
        userDiv.id = `user${index}`;
        userDiv.innerHTML = `User ${index + 1}: <span>${counters[index]}</span> 
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

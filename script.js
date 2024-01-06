// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize counters for 4 users in the shared scope
    let counters = [0, 0, 0, 0];

    const usersDiv = document.getElementById('users');
    const resetButton = document.getElementById('resetButton');

    // User names array
    const userNames = ['Pum', 'Pippi', 'Kusuma', 'Gopi'];

    // Function to increment counter
    function increment(userIndex) {
        counters[userIndex]++;
        updateDisplay();
    }

    // Make increment function globally accessible
    window.increment = increment;

    // Update the display
    function updateDisplay() {
        counters.forEach((count, index) => {
            document.querySelector(`#user${index} span`).textContent = count;
        });
    }

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
        counters.fill(0); // Reset all counters to 0
        updateDisplay();
    });
});

// Expose the increment function to the global scope
function increment(userIndex) {
    // This empty function will be replaced when the DOM is fully loaded
}

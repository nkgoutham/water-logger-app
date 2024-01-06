// Global scope counters array
var counters = [0, 0, 0, 0];

// Function to increment counter, defined in the global scope
function increment(userIndex) {
    counters[userIndex]++;
    updateDisplay();
}

// Function to update the display, defined in the global scope
function updateDisplay() {
    counters.forEach((count, index) => {
        var userSpan = document.getElementById('user' + index);
        if (userSpan) {
            userSpan.textContent = count;
        }
    });
}

// This code will run once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var usersDiv = document.getElementById('users');
    var resetButton = document.getElementById('resetButton');

    // User names array
    var userNames = ['Pum', 'Pippi', 'Kusuma', 'Gopi'];

    // Create user elements
    userNames.forEach(function(name, index) {
        var userDiv = document.createElement('div');
        var userSpan = document.createElement('span');
        userSpan.id = 'user' + index;
        userSpan.textContent = counters[index];

        var incrementButton = document.createElement('button');
        incrementButton.textContent = '+1';
        // Using addEventListener instead of inline onclick
        incrementButton.addEventListener('click', function() {
            increment(index);
        });

        userDiv.appendChild(document.createTextNode(name + ": "));
        userDiv.appendChild(userSpan);
        userDiv.appendChild(incrementButton);
        usersDiv.appendChild(userDiv);
    });

    // Reset button functionality
    resetButton.addEventListener('click', function () {
        counters.fill(0); // Reset all counters to 0
        updateDisplay();
    });
});

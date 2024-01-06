// Define the counters array in the global scope
var counters = [0, 0, 0, 0];

// Define the increment function in the global scope
function increment(index) {
    counters[index]++;
    updateDisplay();
}

// Define the updateDisplay function in the global scope
function updateDisplay() {
    for (var i = 0; i < counters.length; i++) {
        document.getElementById('counter' + i).textContent = counters[i];
    }
}

// Function to display the current date
function displayCurrentDate() {
    var currentDateDiv = document.getElementById('currentDate');
    var now = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateDiv.textContent = now.toLocaleDateString('en-US', options);
}

// This function initializes the app and sets up the event listeners
function initializeApp() {
    var userNames = ['Pum', 'Pippi', 'Kusuma', 'Gopi'];
    var usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ''; // Clear existing content

    // Create divs for each user counter
    userNames.forEach(function(name, index) {
        var userDiv = document.createElement('div');
        var userSpan = document.createElement('span');
        userSpan.id = 'counter' + index;
        userSpan.textContent = counters[index];

        var incrementButton = document.createElement('button');
        incrementButton.textContent = '+1';
        incrementButton.addEventListener('click', function() {
            increment(index);
        });
        
        userDiv.appendChild(document.createTextNode(name + ": "));
        userDiv.appendChild(userSpan);
        userDiv.appendChild(incrementButton);
        usersDiv.appendChild(userDiv);
    });

    // Set up the reset button
    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        counters.fill(0);
        updateDisplay();
    });

    // Display the current date
    displayCurrentDate();
}

// Call the initializeApp function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

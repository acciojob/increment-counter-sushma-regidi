// Get elements
const counter = document.getElementById("counter");
const button = document.getElementById("incrementBtn");

// Add click listener
button.addEventListener("click", function() {
    let currentValue = Number(counter.textContent);

    // Alert the un-incremented value
    alert(currentValue);

    // Increment the counter
    counter.textContent = currentValue + 1;
});



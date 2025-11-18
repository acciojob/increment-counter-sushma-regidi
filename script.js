//your JS code here. If required.
let count = 0; 

function incrementCounter() {
    // Show alert with the un-incremented value
    alert(count);

    // Now increment the value
    count++;

    // Update counter on the page
    document.getElementById("counter").textContent = count;
}

document.getElementById("incrementBtn").addEventListener("click", incrementCounter);


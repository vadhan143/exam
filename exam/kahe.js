// Function to handle form validation
function onlineLoginValidate() {
    var rollNo = document.getElementById('rollNo').value;
    var password = document.getElementById('password').value;

    // Simple validation for Roll No and Password
    if (rollNo.trim() === "") {
        alert("Please enter your Roll Number");
        return false;
    }
    if (password.trim() === "") {
        alert("Please enter your Password");
        return false;
    }
    
    // Example: Add more validation checks here (length, format, etc.)
    
    return true; // If all validations pass
}

// Function to submit the form using Enter key
function enterKeySubmit(e) {
    if (e.key === 'Enter') {
        // Prevent default form submission
        e.preventDefault();

        // Check form validity
        if (onlineLoginValidate()) {
            document.forms['from'].submit(); // Submit the form if valid
        }
    }
}
// kahe.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to validate the batch selection
    const batchForm = document.forms['batchForm'];

    batchForm.addEventListener('submit', function(event) {
        const selectedBatch = document.getElementById('batch').value;
        
        // Check if batch is selected
        if (selectedBatch === "") {
            alert("Please select a batch before submitting!");
            event.preventDefault(); // Prevent form submission if no batch is selected
        } else {
            // Optional: You can display the selected batch for confirmation
            alert("You have selected the batch: " + selectedBatch);
        }
    });
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Here you can add your form processing logic
    const name = document.getElementById('name').value;
    const institution = document.getElementById('institution').value;
    const batch = document.getElementById('batch').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const course = document.getElementById('course').value;

    console.log('Form Submitted:', { name, institution, batch, department, semester, course });

    // Optionally, you can redirect or display a message here
});

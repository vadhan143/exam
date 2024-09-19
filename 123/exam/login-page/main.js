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
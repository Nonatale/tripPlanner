function showForm(formTitle) {
    document.getElementById("formTitle").textContent = formTitle;
    document.getElementById("formContainer").style.display = "block";
}
function submitForm() {
    const response = document.getElementById("formInput").value;
    if (response) {
        alert("Form submitted with response: " + response);
        document.getElementById("formInput").value = ''; // Clear the input field
        document.getElementById("formContainer").style.display = "none"; // Hide the form after submission
    } else {
        alert("Please enter a response before submitting.");
    }
}
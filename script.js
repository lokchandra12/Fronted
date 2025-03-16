document.addEventListener("DOMContentLoaded", function () {
    const codeForm = document.getElementById("codeForm");
    const codeInput = document.getElementById("code");
    const languageSelect = document.getElementById("language");

    codeForm.addEventListener("submit", function (event) {
        let valid = true;
        let errorMessage = "";

        // Check if the code input is empty
        if (codeInput.value.trim() === "") {
            errorMessage = "Code field cannot be empty.";
            valid = false;
        }
        // Check if the code input is too short
        else if (codeInput.value.trim().length < 10) {
            errorMessage = "Code must be at least 10 characters long.";
            valid = false;
        }

        // Check if a language is selected
        if (languageSelect.value === "") {
            errorMessage = "Please select a programming language.";
            valid = false;
        }

        // Display error message and prevent form submission if invalid
        if (!valid) {
            event.preventDefault(); // Stop form submission
            alert(errorMessage); // Show error message
        }
    });
});

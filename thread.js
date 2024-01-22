// In thread.js

// ...

// Initialize captcha on page load
updateCaptcha();

function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');
    var captchaInput = document.getElementById('captcha');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();
    var captcha = parseInt(captchaInput.value);

    // Validate captcha
    if (!isValidCaptcha(captcha)) {
        alert('Please solve the captcha correctly.');
        updateCaptcha();
        return;
    }

    if (name && comment) {
        // Your existing comment submission logic here
        displayComment({ name: name, comment: comment });

        // Clear the input fields
        clearInputFields(nameInput, commentInput, captchaInput);

        // Update the captcha for the next comment
        updateCaptcha();
    } else {
        alert('Please enter both your name and a comment.');
    }
}

// ...

function updateCaptcha() {
    // Regenerate the captcha for the next comment
    getCorrectCaptcha();
}
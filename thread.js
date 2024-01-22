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

function displayComment(comment) {
    var commentSection = document.getElementById('comments');

    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = '<strong>' + comment.name + ':</strong> ' + comment.comment;

    commentSection.appendChild(newComment);
}

function clearInputFields(...inputs) {
    inputs.forEach(input => (input.value = ''));
}

function isValidCaptcha(userAnswer) {
    var correctAnswer = getCorrectCaptcha();
    return !isNaN(userAnswer) && userAnswer === correctAnswer;
}

function getCorrectCaptcha() {
    // Generate a simple addition problem for the captcha
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    // Display the captcha question in the form
    document.getElementById('captcha-question').innerText = num1 + ' + ' + num2;

    // Return the correct answer
    return num1 + num2;
}

function updateCaptcha() {
    // Regenerate the captcha for the next comment
    getCorrectCaptcha();
}

// Load existing comments from cookies when the page loads
window.onload = function () {
    // Your existing code for loading comments here
};

function displayComment(comment) {
    var commentSection = document.getElementById('comments');

    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = '<strong>' + comment.name + ':</strong> ' + comment.comment;

    commentSection.appendChild(newComment);
}

function clearInputFields(...inputs) {
    inputs.forEach(input => (input.value = ''));
}
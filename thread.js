function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');
    var captchaInput = document.getElementById('captcha');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();
    var captcha = parseInt(captchaInput.value);

    // Validate captcha
    if (isNaN(captcha) || captcha !== getCorrectCaptcha()) {
        alert('Please solve the captcha correctly.');
        return;
    }

    if (name && comment) {
        // Your existing comment submission logic here
        displayComment({ name: name, comment: comment });

        // Clear the input fields
        clearInputFields(nameInput, commentInput, captchaInput);
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

function getCorrectCaptcha() {
    // Generate a simple addition problem for the captcha
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    // Display the captcha question in the form
    document.getElementById('captcha-question').innerText = num1 + ' + ' + num2;

    // Return the correct answer
    return num1 + num2;
}

// Load existing comments from cookies when the page loads
window.onload = function () {
    // Your existing code for loading comments here
};
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

        // Clear the input fields
        clearInputFields(nameInput, commentInput, captchaInput);
    } else {
        alert('Please enter both your name and a comment.');
    }
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

function getCookieExpiration() {
    var date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); // Set expiration to 7 days
    return date.toUTCString();
}

// Load existing comments from cookies when the page loads
window.onload = function () {
    var allCookies = document.cookie.split('; ');

    for (var i = 0; i < allCookies.length; i++) {
        var cookie = allCookies[i].split('=');
        if (cookie[0].startsWith('comment_')) {
            var commentObject = JSON.parse(cookie[1]);
            displayComment(commentObject);
        }
    }
};

function createCommentElement(name, comment) {
    var commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');

    var commentContent = document.createElement('p');
    commentContent.innerHTML = '<strong>' + name + ':</strong> ' + comment;

    commentContainer.appendChild(commentContent);

    return commentContainer;
}

function clearInputFields(...inputs) {
    inputs.forEach(input => (input.value = ''));
}

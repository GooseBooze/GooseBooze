function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();

    if (name && comment) {
        // Create a unique identifier for the comment
        var commentId = 'comment_' + Date.now();

        // Create a comment object with name and comment text
        var commentObject = {
            name: name,
            comment: comment
        };

        // Save the comment to a cookie
        document.cookie = commentId + '=' + JSON.stringify(commentObject) + '; expires=' + getCookieExpiration();

        // Add the comment to the comments section
        displayComment(commentObject);

        // Clear the input fields
        clearInputFields(nameInput, commentInput);
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

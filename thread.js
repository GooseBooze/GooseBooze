// In thread.js

function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();

    if (name && comment) {
        // Your existing comment submission logic here
        saveComment({ name: name, comment: comment });

        // Display the comment
        displayComment({ name: name, comment: comment });

        // Clear the input fields
        clearInputFields(nameInput, commentInput);
    } else {
        alert('Please enter both your name and a comment.');
    }
}

function saveComment(comment) {
    // Retrieve existing comments from cookies
    var existingComments = getCommentsFromCookies();

    // Add the new comment to the array
    existingComments.push(comment);

    // Save the updated comments back to cookies
    setCommentsToCookies(existingComments);

    console.log("Comment saved:", comment);
}

function displayComment(comment) {
    var commentSection = document.getElementById('comments');

    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = '<strong>' + comment.name + ':</strong> ' + comment.comment;

    commentSection.appendChild(newComment);

    console.log("Comment displayed:", comment);
}

function clearInputFields(...inputs) {
    inputs.forEach(input => (input.value = ''));
}

function getCommentsFromCookies() {
    var commentsCookie = document.cookie.replace(/(?:(?:^|.*;\s*)comments\s*=\s*([^;]*).*$)|^.*$/, "$1");
    return commentsCookie ? JSON.parse(decodeURIComponent(commentsCookie)) : [];
}

function setCommentsToCookies(comments) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Expires in one year

    document.cookie = 'comments=' + encodeURIComponent(JSON.stringify(comments)) + '; expires=' + expirationDate.toUTCString() + '; path=/';

    console.log("Comments set to cookies:", comments);
}

// Load existing comments from cookies when the page loads
window.onload = function () {
    var existingComments = getCommentsFromCookies();
    existingComments.forEach(function (comment) {
        displayComment(comment);
    });

    console.log("Existing comments loaded:", existingComments);
};
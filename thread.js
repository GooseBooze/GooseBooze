// In thread.js

function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();

    if (name && comment) {
        // Your existing comment submission logic here
        displayComment({ name: name, comment: comment });

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

// Load existing comments from cookies when the page loads
window.onload = function () {
    // Your existing code for loading comments here
};
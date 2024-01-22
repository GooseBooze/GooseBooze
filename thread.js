function submitComment() {
    var nameInput = document.getElementById('name');
    var commentInput = document.getElementById('comment');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();

    if (name && comment) {
        var commentSection = document.getElementById('comments');

        var newComment = createCommentElement(name, comment);
        commentSection.appendChild(newComment);

        // Clear the input fields
        clearInputFields(nameInput, commentInput);
    } else {
        alert('Please enter both your name and a comment.');
    }
}

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
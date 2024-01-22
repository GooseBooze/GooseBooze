function addComment() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    if (name && comment) {
        var commentSection = document.getElementById('comments');

        var newComment = document.createElement('div');
        newComment.innerHTML = '<strong>' + name + ':</strong> ' + comment;

        commentSection.appendChild(newComment);

        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter both your name and a comment.');
    }
}
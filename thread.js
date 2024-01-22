$(function(){
    $("#form").submit(function(e){
        // Create data object
        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.comment = $("#comment").val();
        // The url of your server-side script that handles the post submission
        var url = "http://www.someurl.com/post_comment.php";
        $.POST(url, data)
        .done(function(response){
            // This code executes when the server returns a response
            // Do something with the response like adding the comment to the current list of comments
            // Example (if your response is HTML, better would be a JSON string):
            $("#comments").append(response);
        });
        e.preventDefault();
    });
});
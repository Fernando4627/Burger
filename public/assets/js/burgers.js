$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newburger = {
            author: $("#auth").val().trim(),
            burger: $("#quo").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".update-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let updatedburger = {
            author: $("#auth").val().trim(),
            burger: $("#quo").val().trim()
        };

        let id = $(this).data("id");

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedburger
        }).then(
            function () {
                console.log("updated burger");
                // Reload the page to get the updated list
                location.assign("/");
            }
        );
    });
});

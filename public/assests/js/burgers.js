// creating the funtionality of the devour it button
$(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        var beenEaten = {
            devoured: true
        };

        // send PUT request
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: beenEaten
        }).then(function () {
            location.reload();
            console.log("clicked")
        });
    });

});
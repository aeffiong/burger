// creating the funtionality of the devour it button
// $(function() {
//     $(".change-sleep").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");
  
//       var newSleepState = {
//         sleepy: newSleep
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
$(function() {
    $("#submit").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        var beenEaten = {
            devoured: true
        };

        // send PUT request
        $.ajax("/burgers/update/" + id, {
            type: "PUT",
            data: beenEaten
        }).then(function() {
            location.reload();
        });
    });

});
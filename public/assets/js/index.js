// Provides functionality to the add burger button
$(function () {
    $("#submitButton").on("submit", function (event) {
        event.preventDefault();
        
        const newBurger = {
            burger_name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        )
    })

    // Provides functionality to the devour button
    $(".devourButton").on("click", function(event){
        event.preventDefault();

        const id = $(this).data("id");

        const devouredBurger = {
            devoured: devoured = 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function(){
                location.reload();
            }
        )
    })
});
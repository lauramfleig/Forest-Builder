$(function () {

    $(document).on("submit", "#buildForest", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTree = {
            tree: $("#buildForest [name=tree_name]").val().trim()
        };

        // Send the POST request.
        $.ajax("/forest", {
            type: "POST",
            data: newTree
        }).then(
            function (result) {
                console.log("created new tree");
                console.log(result)
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })


    $(document).on("click", ".moveTree", function(){
        const planted = true;

        var targetID = {
            id: $(this).attr('data-id')
        };
        
        $.ajax("/forest/planted", {
            type: "PUT",
            data: targetID
        }).then(
            function () {
                 if (planted) {
                     $('#seedlings').appendTo('#planted-section')
                 }
            }
            );
    });
 });

  


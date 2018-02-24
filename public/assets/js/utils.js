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
        //console.log($(this).data("name"));
        const planted = true;
        var clickedButton = this;//pointing to the button that was clicked
        var targetID = {
            id: $(this).attr('data-id'),
           
        };
       

        $.ajax("/forest/planted", {
            type: "PUT",
            data: targetID
        }).then(
            function () {
                
                
                // $('#seedlings').appendTo('#planted-section')
                 
                 
                var name = $(clickedButton).data('name');
                 //remove the parent holding the button
                 $(clickedButton).parent().remove();
                // console.log($(clickedButton).data('name'));
                 //create a li item to the plated trees
                var html = '<div id="seedlings">';
                    html += '<p>Tree Name: '+name+'</p>'
                    html += '</div>';

                    
                $("#planted-section").append(html);
            }
            );
    });
 });

  


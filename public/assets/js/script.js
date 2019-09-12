$(".devour-form").submit(function(event) {
    event.preventDefault();
    var burgerId = $("input.burger_id").val();
    $.ajax({
        url: 'burgers/update/' + burgerId,
        type: 'put'
    });
    // return something here to return data?
    // doesn't take effect until after I refresh page
});



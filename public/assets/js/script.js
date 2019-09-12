$(".devour-form").submit(function(event) {
    event.preventDefault();
    var burgerId = $("input.burger_id").val();
    $.ajax({
        url: 'burgers/update/' + burgerId,
        type: 'put'
    });
    location.reload();
});



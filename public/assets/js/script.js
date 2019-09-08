$(document).ready(function() {
  // Getting references to the burger name input and burger container
  var burgerNameInput = $("#burger_name");
  var burgerList = $(".task");
  var burgerContainer = $(".burger-container");

  // Adding event listeners to the form to create a new object
  $(document).on("submit", "#text-enter-button", handleBurgerFormSubmit);
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Burgers
  getBurgers();

  // A function to handle what happens when the form is submitted to create a new Burger
  function handleBurgerFormSubmit(event) {
    console.log("#burger_name");
    console.log("you clicked submit!");
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!burgerNameInput.val().trim().trim()) {
      return;
    }
    // Calling the createBurger function and passing in the value of the name input
    createBurger({
      burger_name: burgerNameInput
        .val()
        .trim()
    });
  }

  // A function for creating a burger. Calls getBurgers upon completion
  function createBurger(burgerData) {
    $.post("/burgers/create", burgerData)
      .then(getBurgers);
  }

  // Function for creating a new list row for burgers
  function createBurgerRow(burgerData) {
    // console.log(burgerData);
    var newRow = $("<div class=\"row\">");
    newRow.data("burger", burgerData);
    newRow.append("<div class=\"col-sm-9 text-center\">");
    newRow.append("<pre>" + burgerData.burger_name + "</pre>");
    // newTr.append("<td># of burgers will display when we learn joins in the next activity!</td>");
    // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newRow;
  }

  // Function for retrieving burgers and getting them ready to be rendered to the page
  function getBurgers() {
    $.get("/", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createBurgerRow(data[i]));
      }
      renderBurgerList(rowsToAdd);
      burgerNameInput.val("");
    });
  }

  // A function for rendering the list of burgers to the page
  function renderBurgerList(rows) {
    burgerList.children().not(":last").remove();
    burgerContainer.children(".alert").remove();
    if (rows.length) {
      // console.log(rows);
      burgerList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no burgers
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Burger before anything else.");
    burgerContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  // function handleDeleteButtonPress() {
  //   var listItemData = $(this).parent("td").parent("tr").data("author");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/authors/" + id
  //   })
  //     .then(getAuthors);
  // }
});

  // $(document).ready(function() {
  //   // 
  //   var burgerId;
  //   // Sets a flag for whether or not we're updating a burger to be false initially
  //   var updating = false;
  
  //   // If we have this section in our url, we pull out the burger id from the url
  //   // In localhost:8080/?id=1, burgerId is 1
  //   // if (url.indexOf("?id=") !== -1) {
  //   //   burgerId = url.split("=")[1];
  //   //   getBurgerData(burgerId);
  //   // }
  
  //   // Getting jQuery references to the burger name input
  //   var burgerInput = $("#enter_text");

  //   // Adding an event listener for when the form is submitted
  //   $("#text-enter-button").on("submit", function handleFormSubmit(event) {
  //     event.preventDefault();

  //     // Constructing a newBurger object to hand to the database
  //     var newBurger = {
  //       burger_name: burgerInput.val().trim()
  //     };
  
  //     // console.log(newBurger);
  
  //     // If we're updating a burger run updateBurger to update a burger
  //     // Otherwise run submitBurger to create a whole new burger
  //     if (updating) {
  //       newBurger.id = burgerId;
  //       updateBurger(newBurger);
  //     }
  //     else {
  //       submitBurger(newBurger);
  //     }
  //   });
  
    // Submits a new burger
    // function submitBurger(Burger) {
    //   $.post("/burgers/create", Post, function() {
    //     // window.location.href = "/blog";
    //     console.log("you added a burger!");
    //   });
    // }
  
    // Gets burger data for a burger if we're editing
    // function getBurgerData(id) {
    //   $.get("burgers/" + id, function(data) {
    //     if (data) {
    //       // If this burger exists, prefill form with data
    //       burgerInput.val(data.burger_name);
    //       // If we have a burger with this id, set a flag for us to know to update the burger
    //       // when we hit submit
    //       updating = true;
    //     }
    //   });
    // }
  
    // Update a given burger
  //   function updateBurger(burger) {
  //     $.ajax({
  //       method: "PUT",
  //       url: "/burgers/update/",
  //       data: burger
  //     })
  //   }
  // });
  
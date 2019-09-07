// $(document).ready(function() {
//     /* global moment */
//     // burgerContainer holds all of our burgers
//     var burgerContainer = $(".burger-container");
   
//     // Click events for the edit and delete buttons
//     $(document).on("click", "button.delete", handleBurgerDelete);
//     // $(document).on("click", "button.edit", handleBurgerEdit);
//     // burgerSelect.on("change", handleBurgerChange);
//     var burgers;
  
//     // This function grabs burgers from the database and updates the view
//     function getBurger() {
//       $.get("/burgers", function(data) {
//         console.log("Burgers: ", data);
//         burgers = data;
//         if (!burgers || !burgers.length) {
//           displayBurger();
//         }
//         else {
//           initializeRows();
//         }
//       });
//     }
  
//     // This function does an API call to delete burgers
//     function deleteBurger(id) {
//       $.ajax({
//         method: "DELETE",
//         url: "/burgers/delete/" + id
//       })
//         .then(function() {
//           getBurger(burgerSelect.val());
//         });
//     }
  
//     // Getting the initial list of burgers
//     getBurger();
//     // InitializeRows handles appending all of our constructed burger HTML inside
//     // burgerContainer
//     function initializeRows() {
//       burgerContainer.empty();
//       var burgerToAdd = [];
//       for (var i = 0; i < burgers.length; i++) {
//         burgerToAdd.push(createNewRow(burgers[i]));
//       }
//       burgerContainer.append(burgerToAdd);
//     }
  
//     // This function constructs a burger's HTML
//     function createNewRow(burger) {
//       var newBurger = $("<div>");
//       newBurger.addClass("card");
//     //   var newBurgerHeading = $("<div>");
//     //   newBurgerHeading.addClass("card-header");
//       var deleteBtn = $("<button>");
//       deleteBtn.text("x");
//       deleteBtn.addClass("delete btn btn-danger");
//       var editBtn = $("<button>");
//       editBtn.text("EDIT");
//       editBtn.addClass("edit btn btn-default");
//     //   var newPostTitle = $("<h2>");
//     //   var newPostDate = $("<small>");
//     //   var newPostCategory = $("<h5>");
//     //   newPostCategory.text(post.category);
//     //   newPostCategory.css({
//     //     float: "right",
//     //     "font-weight": "700",
//     //     "margin-top":
//     //     "-15px"
//     //   });
//     //   var newPostCardBody = $("<div>");
//     //   newPostCardBody.addClass("card-body");
//     //   var newPostBody = $("<p>");
//     //   newPostTitle.text(post.title + " ");
//     //   newPostBody.text(post.body);
//     //   var formattedDate = new Date(burger.createdAt);
//     //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//     //   newPostDate.text(formattedDate);
//     //   newPostTitle.append(newPostDate);
//     //   newPostCardHeading.append(deleteBtn);
//     //   newPostCardHeading.append(editBtn);
//     //   newPostCardHeading.append(newPostTitle);
//     //   newPostCardHeading.append(newPostCategory);
//     //   newPostCardBody.append(newPostBody);
//     //   newPostCard.append(newPostCardHeading);
//     //   newPostCard.append(newPostCardBody);
//     //   newPostCard.data("post", post);
//       return newBurger;
//     }
  
//     // This function figures out which burger we want to delete and then calls
//     // deleteBurger
//     function handleBurgerDelete() {
//       var currentBurger = $(this)
//         .parent()
//         .parent()
//         .data("burger");
//       deleteBurger(currentBurger.id);
//     }
  
//     // This function figures out which post we want to edit and takes it to the
//     // Appropriate url
//     // function handleBurgerEdit() {
//     //   var currentBurger = $(this)
//     //     .parent()
//     //     .parent()
//     //     .data("burger");
//     // //   window.location.href = "/cms?post_id=" + currentPost.id;
//     // }
  
//     // This function displays a message when there are no burgers
//     function displayBurger() {
//       burgerContainer.empty();
//       var messageH2 = $("<h2>");
//       messageH2.css({ "text-align": "center", "margin-top": "50px" });
//       messageH2.html("No burgers yet.");
//       burgerContainer.append(messageH2);
//     }
  
//     // This function handles reloading new posts when the category changes
//     // function handleBurgerChange() {
//     //   var newPostCategory = $(this).val();
//     //   getPosts(newPostCategory);
//     // }
  
//   });


  $(document).ready(function() {
    // 
    var burgerId;
    // Sets a flag for whether or not we're updating a burger to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the burger id from the url
    // In localhost:8080/?id=1, burgerId is 1
    if (url.indexOf("?id=") !== -1) {
      burgerId = url.split("=")[1];
      getBurgerData(burgerId);
    }
  
    // Getting jQuery references to the burger name input
    var burgerInput = $("#enter_text");

    // Adding an event listener for when the form is submitted
    $("#text-enter-button").on("submit", function handleFormSubmit(event) {
      event.preventDefault();

      // Constructing a newBurger object to hand to the database
      var newBurger = {
        burger_name: burgerInput.val().trim()
      };
  
      console.log(newBurger);
  
      // If we're updating a burger run updateBurger to update a burger
      // Otherwise run submitBurger to create a whole new burger
      if (updating) {
        newBurger.id = burgerId;
        updateBurger(newBurger);
      }
      else {
        submitBurger(newBurger);
      }
    });
  
    // Submits a new burger
    function submitBurger(Burger) {
      $.post("/burgers/create", Post, function() {
        // window.location.href = "/blog";
        console.log("you added a burger!");
      });
    }
  
    // Gets burger data for a burger if we're editing
    function getBurgerData(id) {
      $.get("burgers/" + id, function(data) {
        if (data) {
          // If this burger exists, prefill form with data
          burgerInput.val(data.burger_name);
          // If we have a burger with this id, set a flag for us to know to update the burger
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given burger
    function updateBurger(burger) {
      $.ajax({
        method: "PUT",
        url: "/burgers/update/",
        data: burger
      })
    }
  });
  
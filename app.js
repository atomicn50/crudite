$(document).ready(function() {
  //attach event listener to button
  //
  $('.store-btn').on('click', function() {
  	console.log(event.target);
    localStorage.setItem("hrext", 'tinh')
  });

  $('.get-btn').on('click', function() {
    console.log(localStorage.getItem("hrext"));
  });

  $('.delete-btn').on('click', function() {
  	localStorage.removeItem("hrext");
  });


});
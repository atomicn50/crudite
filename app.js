$(document).ready(function() {
  //attach event listener to button
  //
  $('.store-btn').on('click', function(event) {
  	let titleValue = $('.input-field-title').val();
  	let contentValue = $('.input-field-body').val();

    localStorage.setItem('titleValue', titleValue);
    localStorage.setItem('contentValue', contentValue);
  });

  $('.get-btn').on('click', function(event) {
    // console.log(localStorage.getItem("hrext"));
    let titleValue = localStorage.getItem('titleValue');
    let contentValue = localStorage.getItem('contentValue');

    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);
    //using backticks so you can evaluate javascript statements inside
  });

  $('.delete-btn').on('click', function() {
  	console.log(localStorage.removeItem("hrext"));
  });


});
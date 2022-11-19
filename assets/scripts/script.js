// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  $(document).ready(function() {
    let savedTasks = JSON.parse(localStorage.getItem('task'));
    let timeEl = 0;
    let timeElId = 'timeEl';
    let currentTime = 0;
  $(".saveBtn").on( "click", function(event) {
    event.preventDefault();
    console.log('click');
    let myVal = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    let newTask = JSON.parse(localStorage.getItem('task')) || [];
    newTask.push({time:time, value:myVal})
    localStorage.setItem('task', JSON.stringify(newTask));
    // localStorage.setItem('description', myVal);
  });
// localStorage.setItem.description
//     key,Value,


if (timeEl < currentTime){
  $(this).addClass('past');
  $(this).removeClass('current');
  $(this).removeClass('future');
} else if(timeEl == currentTime){
  $(this).addClass('current');
  $(this).removeClass('past');
  $(this).removeClass('future');
} else if(timeEl > currentTime){
  $(this).addClass('future');
  $(this).removeClass('present');
  $(this).removeClass('past');
}
// $('.btn').on('click', function(event){
// console.log()
// })
// }


$('.description' ).each(function( index ) {
  let time = $(this).parent().attr('id');
  for (let i = 0; i < savedTasks.length; i++) {
    const element = savedTasks[i];
    if (time == element.time) {
      $(this).text(element.value);
    } 
  }
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
})
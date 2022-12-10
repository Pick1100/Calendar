$(document).ready(function () {
  let savedTasks = JSON.parse(localStorage.getItem('task'));
  var today = new Date();
  var timeEl = today.getHours();
$('currentTime').document = today.getHours;
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log('click');
    let myVal = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    let newTask = JSON.parse(localStorage.getItem('task')) || [];
    newTask.push({ time: time, value: myVal })
    localStorage.setItem('task', JSON.stringify(newTask));
    // localStorage.setItem('description', myVal);
  });
  $('.time-block').each(function () {
    var blockHour = parseInt(
      $(this)
        .attr('id')
        .split('-')[1]
    );
    if (timeEl < blockHour) {
      $(this).addClass('past');
      $(this).removeClass('current');
      $(this).removeClass('future');
    } else if (timeEl == blockHour) {
      $(this).addClass('current');
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (timeEl > blockHour) {
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    }
    $('.description').each(function (index) {
      let time = $(this).parent().attr('id');
      for (let i = 0; i < savedTasks.length; i++) {
        const element = savedTasks[i];
        if (time == element.time) {
          $(this).text(element.value);
        }
      }
    });
  });
});
 

    // TODO: Add code to display the current date in the header of the page

$(function () {

  var hourArray = [
    {
      "hour": 9,
      "displayText": "9 AM",
      "id": "hour-9"
    },
    {
      "hour": 10,
      "displayText": "10 AM",
      "id": "hour-10"
    },
    {
      "hour": 11,
      "displayText": "11 AM",
      "id": "hour-11"
    },
    {
      "hour": 12,
      "displayText": "12 PM",
      "id": "hour-12"
    },
    {
      "hour": 13,
      "displayText": "1 PM",
      "id": "hour-13"
    },
    {
      "hour": 14,
      "displayText": "2 PM",
      "id": "hour-14"
    },
    {
      "hour": 15,
      "displayText": "3 PM",
      "id": "hour-15"
    },
    {
      "hour": 16,
      "displayText": "4 PM",
      "id": "hour-16"
    },
    {
      "hour": 17,
      "displayText": "5 PM",
      "id": "hour-17"
    }
  ]
  
function displayHours() {
    for (const hour of hourArray) {
      var hourClass = getHourClass(hour);
      var note = localStorage.getItem(hourNote) || " "
      var hourCard = $(`
      <div class="col">
      <div class="card ${hourClass}">
          <div class="card-body">
              <h5 class="card-title">${hour.displayText}</h5>
              <textarea id=${hourId} class="col-8 col-md-10 description" rows="3">${note}</textarea>
              <button onclick="saveFriendNote('${hourId}')" class="btn saveBtn col-2 col-md-1" aria-label="save">
                  <i class="fas fa-save" aria-hidden="true"></i>
              </button>
          </div>
      </div>
  </div>
`);

$("#hour-container").append(hourCard);
    }
  }

  function saveHourNote(hourId) {
    var note - $(`#${hourId}`).val();
    localStorage.setItem(HourId, note);
    displayFriends();
  }
  
var currentDay = dayjs().format("dddd, MMMM D");
$('#currentDay').text(currentDay);

var currentHour = dayjs().hour();
      `)
        }
        
}
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
    
    
  });
  

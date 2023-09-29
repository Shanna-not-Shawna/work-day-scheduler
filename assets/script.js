//add all functions with jQuery inside this function
$(function () {
// get and display the current day    
});

var currentDay = dayjs().format("dddd, MMMM D");
$('#currentDay').text(currentDay);

// get the current hour for calculations
var currentHour = dayjs().hour();
console.log(currentHour);

//array of objects with time block data
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

//dynamically display the time blocks
function displayBlocks() {

  for (const block of hourArray) {
      var blockClass = getHourClass(block.hour);
      var hourId = `${block.hour}_${block.hour}`
      var note = localStorage.getItem(hourId) || ""
      var blockCard = $(`
          <div class="col">
              <div class="card ${blockClass}">
                  <div class="card-body">
                      <h5 class="card-title">${block.displayText}</h5>
                      <textarea id=${hourId} class="col-8 col-md-10 description" rows="3">${note}</textarea>
                      <button onclick="saveHourNote('${hourId}')" class="btn saveBtn col-2 col-md-1" aria-label="save">
                          <i class="fas fa-save" aria-hidden="true"></i>
                      </button>
                  </div>
              </div>
          </div>
      `);
//add time blocks to container
      $("#hour-container").append(blockCard);
  }

}

// set key and string in local storage
function saveHourNote(hourId){
  var note  = $(`#${hourId}`).val();
  localStorage.setItem(hourId, note);
  displayBlocks();
}
// use current hour to determine style class for each time block
function getHourClass(hour){
  if(hour < currentHour){
      return "past"
  }else if(hour === currentHour){
      return "present"
  }else {
      return "future"
  }
}

displayBlocks()
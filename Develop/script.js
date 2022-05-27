// Variable declaration
var timeDisplayEl = $('#timeDisplay')
var saveButtonEl = $('#saveBtn')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



var d = new Date()
let dayNumber = d.getDate()

var m = new Date()
let month = months[m.getMonth()]

var y = new Date()
let year = y.getFullYear()

var b = new Date()
let day = week[b.getUTCDay()]


var currentTime = new Date()
var hour = currentTime.getHours()
var minute = currentTime.getMinutes()
var second = currentTime.getSeconds()

var testTime = moment().format("HH")



// Storing Data

const keyInput = document.getElementById("${9}Save")
const btnClick = document.getElementById("sve")

btnClick.onclick = function () {
  const data = keyInput.value
  console.log(data)
}








document.getElementById("currentDay").innerHTML = "" + day + " " + dayNumber + "th of " + month + ", " + year


// Checks the time vs whats on the table, if it is past the time red it out, if is in the future (grey), current is green


$("input").each(function () {
  var currentBlock = $("input").attr("id")


  // Present loop - Check if we in the current hour
  if (currentBlock == moment().format("HH")) {

    $("input").addClass("present")

    // Future Loop, if current block is less than the time currently
  } else if (currentBlock < moment().format("HH")) {
    // currentBlock.addClass("future")
    $("input").addClass("future")
  }
  else {
    // past 
    $("input").addClass("past")
  }

})


// Saving Functionality 


// $('saveBtn').addEventListener('click', saveMe()){

// }

// On user click, the system will save the text entered in the event column and save it to local storage
function saveMe() {
  var textStorage = $(input).value;

  localStorage
  console.log("localStorage")

  localStorage.setItem('name', input)

}

function renderEvent() {

}




// Function from stackover flow question answered

// function clock() {
//   let date = new Date();
//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   let session = "AM";

//   if (hh == 0) {
//     hh = 12;
//   }
//   if (hh > 12) {
//     hh = hh - 12;
//     session = "PM";
//   }

//   hh = (hh < 10) ? "0" + hh : hh;
//   mm = (mm < 10) ? "0" + mm : mm;
//   ss = (ss < 10) ? "0" + ss : ss;

//   let time = hh + ":" + mm + ":" + ss + " " + session;

//   document.getElementById("timeDisplay").innerText = time;
//   let t = setTimeout(function () { clock() }, 1000);
// }
// clock();
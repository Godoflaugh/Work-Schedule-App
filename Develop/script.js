// Variable declaration
var timeDisplayEl = $('#timeDisplay')

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


// var time = new Date()
// time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })




document.getElementById("currentDay").innerHTML = "" + day + " " + dayNumber + "th of "  + month + ", " + year 
// document.getElementById("timeDisplay").innerHTML = hour + ":" + minute 
// document.getElementById("timeDisplay").innerHTML = time

// Checks the time vs whats on the table, if it is past the time red it out, if is in the future (grey), current is green


if(hour <= 17 && hour >= 9){
  document.getElementById("nineSlot").style.background = "grey"
}











// Function 

function clock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("timeDisplay").innerText = time;
  let t = setTimeout(function () { clock() }, 1000);
}
clock();
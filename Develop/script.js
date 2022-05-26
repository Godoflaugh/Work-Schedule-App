// Variable declaration
var timeDisplayEl = $('#timeDisplay')

// Time Display Functionality
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a')
  timeDisplayEl.text(rightNow)
  console.log(rightNow)
}

setInterval(displayTime, 1000)
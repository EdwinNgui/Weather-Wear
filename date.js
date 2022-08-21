var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

//Function to get the correct integer for the index of the days array
function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (let i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)].substring(0, 3);
  if (i == 0){
    document.getElementById("day0").innerHTML = weekday[CheckDay(i)].substring(0, 3);
  }
}


var time = new Date();
const timeDate = document.getElementById("timeNow")
timeDate.innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',hour12: true });
//On browser
// const dayOne = document.querySelector(".day1");
// const dayTwo = document.querySelector(".day2");
// const dayThree = document.querySelector(".day3");
// const dayFour = document.querySelector(".day4");
// const dayFive = document.querySelector(".day5");

// for (let i = 0; i < 5; i++) {
//   const weekday = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   const d = new Date();
//   let nextDay = i;
//   if (nextDay >= 1 && weekday[d.getDay()] === "Saturday") {
//     nextDay -= 7;
//   }
//   const day = weekday[d.getDay() + nextDay];
//   if (i === 0) {
//     dayOne.innerHTML = "Sunday";
//   } else if (i === 1) {
//     dayTwo.innerHTML = `${day}`;
//   } else if (i === 2) {
//     dayThree.innerHTML = day;
//   } else if (i === 3) {
//     dayFour.innerHTML = day;
//   } else if (i === 4) {
//     dayFive.innerHTML = day;
//   }
// }

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
  document.getElementById("day" + (i + 1)).innerHTML = weekday[
    CheckDay(i)
  ].substring(0, 3);
}

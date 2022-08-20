// Elements to be used
const iconEl = document.querySelector(".weather-iconPri");
const tempEl = document.querySelector(".temperature-valuePri p");
const descEl = document.querySelector(".temperature-descriptionPri p");
const notificationEl = document.querySelector(".notificationPri");

// Holds weather
const weather = {};

weather.temperature = {
  unit: "celsius"
};

const KELVIN = 273;

// Key for the API
const key = "997798eadb10e6a1dd80d06f23f607df";

// Checks if browser can use geolocation
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationEl.style.display = "block";
  notificationEl.innerHTML =
    "<p>Browser doesn't Support Geolocation. Enable location services to continue.</p>";
}

// Find's user coords
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// Error message
function showError(error) {
  notificationEl.style.display = "block";
  notificationEl.innerHTML = `<p> ${error.message} </p>`;
}

//Issue: Displaying the daily weather temperature from the 3hour intervals 5 day api data
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      //Getting the temp for each day
      for (let i = 0; i < 5; i++) {
        console.log("dayTemp" + (i + 1));
        let day = document.getElementsByClassName("dayTemp" + (i + 1));
        console.log(data["list"][8 * i + 1]["main"]["temp"] - KELVIN);
        day[0].innerHTML =
          parseInt(data["list"][8 * i + 1]["main"]["temp"] - KELVIN) + " °C";
        console.log(day);
      }

      // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      // weather.description = data.weather[0].description;
      // weather.iconId = data.weather[0].icon;
      // weather.IdCondition = data.weather[0].id;

      //Takes the weather condition of current day
      const weatherCondition = data["list"][1]["weather"]["id"];
      console.log(weatherCondition);
      console.log("Over here!");
      linkMaker();
    });
    
}

// // Primary Box (Day 0)
// function getWeather(latitude, longitude) {
//   let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}`;
//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
      
//     });
// }

// // Calls weather data
// function getWeather(latitude, longitude) {
//   let api = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}`;
//   console.log(api);

//   fetch(api)
//     .then(function (response) {
//       let data = response.json();
//       return data;
//     })
//     .then(function (data) {
//       weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//       weather.description = data.weather[0].description;
//       weather.iconId = data.weather[0].icon;
//       weather.IdCondition = data.weather[0].id;

//       for (let i = 0; i < 5; i++) {
//         document.getElementById("dayTemp" + (i + 1)).innerHTML =
//           Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
//       }
//       // for (let i = 0; i < 5; i++) {
//       //   document.getElementById("icon" + (i + 1)).src =
//       //     "http://openweathermap.org/img/wn/" +
//       //     data.list[i].weather[0].icon +
//       //     ".png";
//       // }

//       console.log(data);
//     });
//     .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"));
// }

// // Moves data to site
// function displayWeather() {
//   iconEl.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
//   tempEl.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//   descEl.innerHTML = weather.description;
//   // locationEl.innerHTML = `${weather.city}, ${weather.country}`;
//   linkMaker();
// }

// // Celsius to farenheit conversion
// function celsiusToFahrenheit(temperature) {
//   return (temperature * 9) / 5 + 32;
// }

// // If user clicks on the temperature it turns from F to C, or backwards
// tempEl.addEventListener("click", function () {
//   if (weather.temperature.value === undefined) return;

//   if (weather.temperature.unit === "celsius") {
//     let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//     fahrenheit = Math.floor(fahrenheit);

//     tempEl.innerHTML = `${fahrenheit}°<span>F</span>`;
//     weather.temperature.unit = "fahrenheit";
//   } else {
//     tempEl.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//     weather.temperature.unit = "celsius";
//   }
// });

// // TEST STUFF ///////////////////////////////////////////////////////////////
// //Arrays For Images
// const rainyFashion = [
//   `https://data.whicdn.com/images/363389287/original.jpg`,
//   `https://data.whicdn.com/images/361408327/original.jpg`,
//   `https://data.whicdn.com/images/363253783/original.jpg`,
//   `https://data.whicdn.com/images/205167832/original.jpg`,
//   `https://data.whicdn.com/images/363399313/original.jpg`,
//   `https://data.whicdn.com/images/341891409/original.jpg`,
//   `https://data.whicdn.com/images/363399302/original.jpg`,
//   `https://data.whicdn.com/images/306190296/original.jpg`,
//   `https://data.whicdn.com/images/363399304/original.jpg`
// ];

// const snowFashion = [
//   `https://data.whicdn.com/images/363552640/original.jpg`,
//   `https://data.whicdn.com/images/363923490/original.jpg`,
//   `https://data.whicdn.com/images/363915002/original.jpg`,
//   `https://data.whicdn.com/images/363836644/original.jpg`,
//   `https://data.whicdn.com/images/363888296/original.jpg`,
//   `https://data.whicdn.com/images/361759162/original.jpg`,
//   `https://data.whicdn.com/images/338451605/original.jpg`,
//   `https://data.whicdn.com/images/304777689/original.jpg`,
//   `https://data.whicdn.com/images/274521579/original.jpg`
// ];

// const sunnyFashion = [
//   `https://i.pinimg.com/236x/02/1f/fa/021ffa5f4f764cfd5d93710b23b28f43.jpg`,
//   `https://i.pinimg.com/236x/50/88/f3/5088f3ca1706c5f9a594c239b01b709a.jpg`,
//   `https://i.pinimg.com/564x/07/c8/7e/07c87ea35aeab80fc0baead05405feb7.jpg`,
//   `https://i.pinimg.com/564x/33/df/5b/33df5beffed4999bfdcb0a2b846d80da.jpg`,
//   `https://i.pinimg.com/564x/0c/95/94/0c9594e946ccf8a701cf8e52bc5f9f56.jpg`,
//   `https://i.pinimg.com/564x/52/a2/d3/52a2d3b289c2832bcc8dbf25d6b239e0.jpg`,
//   `https://i.pinimg.com/564x/60/54/cd/6054cddba2ab5d42c2241e5227be77e0.jpg`,
//   `https://i.pinimg.com/564x/90/dd/d3/90ddd3250f02c68caddb4396d9f1db7f.jpg`,
//   `https://data.whicdn.com/images/363369204/original.jpg`
// ];

// const autumnFashion = [
//   `https://i.pinimg.com/564x/15/44/28/1544288be27adfd2b525d83b4daa00de.jpg`,
//   `https://i.pinimg.com/564x/d1/97/31/d1973153f32d9d65cec36aa4b80c2fb8.jpg`,
//   `https://i.pinimg.com/564x/5c/dd/c5/5cddc55fab54549580be6c7990aa7ad3.jpg`,
//   `https://i.pinimg.com/564x/da/d9/c2/dad9c25aa675af7fe5d678f598f1e7f7.jpg`,
//   `https://i.pinimg.com/564x/f5/be/62/f5be621679d3df7463775bc84cfa7c03.jpg`,
//   `https://i.pinimg.com/564x/fd/af/72/fdaf72c47ab047806dda57919e63fcf0.jpg`,
//   `https://i.pinimg.com/564x/5c/fb/13/5cfb13d7f28e8031fb46762485676a53.jpg`,
//   `https://i.pinimg.com/564x/5e/70/b7/5e70b720d163902eed88f6378c566352.jpg`,
//   `https://i.pinimg.com/564x/f0/1c/52/f01c52eb3dd204d95799dcb8149cb311.jpg`
// ];

// const winterFashion = [
//   `https://data.whicdn.com/images/363926401/original.jpg`,
//   `https://data.whicdn.com/images/363923719/original.jpg`,
//   `https://i.pinimg.com/564x/f0/fc/02/f0fc024bb89758df369d370374c6b6f5.jpg`,
//   `https://i.pinimg.com/564x/92/39/89/923989ab54b8defb28b48c2a71e12304.jpg`,
//   `https://i.pinimg.com/564x/01/46/82/014682e9a388f601f40d1fa489db4f7e.jpg`,
//   `https://i.pinimg.com/564x/96/11/36/961136474bd969f73b65176cb10de796.jpg`,
//   `https://i.pinimg.com/564x/62/3d/8e/623d8e2cc1c2052c1cbac899f99054e9.jpg`,
//   `https://i.pinimg.com/564x/b0/55/05/b05505b62a23ad8227c25e71281b307c.jpg`,
//   `https://i.pinimg.com/564x/0a/ec/ff/0aecff9c33fa53ca146f8d4b1429e64f.jpg`
// ];

// //var display = document.createElement("img");
// //isplay.src = rainyFashion[0];
// //document.body.appendChild(display);
// // TEST STUFF END ///////////////////////////////////////////////////////////////

function linkMaker(weatherCondition) {
  var conditionId = parseInt(weather.IdCondition);
  console.log(typeof conditionId);

  var tempCompare = parseInt(weather.temperature.value);
  console.log(typeof tempCompare);

  //Rainy and thunderstorm (200-531)
  if (weather.IdCondition <= 531) {
    //Randomized Pictures(Rainy)
    const shuffledRainyArray = rainyFashion.sort((a, b) => 0.5 - Math.random());
    //Rainy Clothes Display
    for (let i = 0; i < 3; i++) {
      var displayRainy = document.createElement("img");
      displayRainy.src = shuffledRainyArray[i];
      document.body.appendChild(displayRainy);
    }
    //snowy (600-622)
  } else if (weather.IdCondition <= 622) {
    //Randomized Pictures(Snow)
    const shuffledSnowArray = snowFashion.sort((a, b) => 0.5 - Math.random());
    //Snow Clothes Display
    for (let i = 0; i < 3; i++) {
      var displaySnow = document.createElement("img");
      displaySnow.src = shuffledSnowArray[i];
      document.body.appendChild(displaySnow);
    }

    //Sunny
  } else if (tempCompare >= 20) {
    //Randomized Pictures(Sunny)
    const shuffledSunnyArray = sunnyFashion.sort((a, b) => 0.5 - Math.random());
    //Sunny Clothes Display
    for (let i = 0; i < 3; i++) {
      var displaySunny = document.createElement("img");
      displaySunny.src = shuffledSunnyArray[i];
      document.body.appendChild(displaySunny);
    }

    //Autumn
  } else if (tempCompare >= 11) {
    const shuffledAutumnArray = autumnFashion.sort(
      (a, b) => 0.5 - Math.random()
    );
    //Autumn Clothes Display
    for (let i = 0; i < 3; i++) {
      var displayAutumn = document.createElement("img");
      displayAutumn.src = shuffledAutumnArray[i];
      document.body.appendChild(displayAutumn);
    }

    //Winter
  } else if (tempCompare <= 10) {
    const shuffledWinterArray = winterFashion.sort(
      (a, b) => 0.5 - Math.random()
    );
    //Winter Clothes Display
    for (let i = 0; i < 3; i++) {
      var displayWinter = document.createElement("img");
      displayWinter.src = shuffledWinterArray[i];
      document.body.appendChild(displayWinter);
    }
  }
}

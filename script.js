function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  let time = new Intl.DateTimeFormat("en-US", options).format();
  console.log(time);
  const month = monthNames[today.getMonth()];
  today = month + " " + dd + " | " + time;
  const currentDate = document.querySelector(".current-date");
  currentDate.innerHTML = today;
}
getDate();

const getWeatherData = async () => {
  const zip = document.querySelector(".zipInput").value;
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=622d85fb1a656b0a3ab04b6a4f7fe706&units=imperial`
  );
  const formattedJson = await data.json();

  const city = document.querySelector(".location");
  city.innerHTML = formattedJson.name;

  const temp = document.querySelector(".temperature");
  temp.innerHTML = formattedJson.main.temp.toFixed(0) + " °F";

  const maxTemp = document.querySelector(".maxTemp");
  maxTemp.innerHTML = formattedJson.main.temp_max.toFixed(0) + " °F";

  const minTemp = document.querySelector(".minTemp");
  minTemp.innerHTML = formattedJson.main.temp_min.toFixed(0) + " °F";

  const humidity = document.querySelector(".humidity");
  humidity.innerHTML = formattedJson.main.humidity.toFixed(0) + "%";
};

const submit = document.querySelector(".submit");
const input = document.querySelector(".zipInput");

submit.addEventListener("click", function () {
  getWeatherData();
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit.click();
  }
});

setInterval(getDate, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // Function to update the current time in UTC
  function updateCurrentTimeUTC() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, "0");
    const minutes = now.getUTCMinutes().toString().padStart(2, "0");
    const seconds = now.getUTCSeconds().toString().padStart(2, "0");

    const currentTimeUTC = `${hours}:${minutes}:${seconds}`;

    const timeElement = document.getElementById("currentTimeUTC");

    if (timeElement) {
      timeElement.textContent = currentTimeUTC;
    }
  }

  // Function to update the current day of the week
  function updateCurrentDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const now = new Date();
    const currentDayNumber = now.getUTCDay();
    const currentDayString = daysOfWeek[currentDayNumber];

    const dayElement = document.getElementById("currentDay");

    if (dayElement) {
      dayElement.textContent = currentDayString;
    }
  }

  // Update the current time and day when the page loads
  updateCurrentTimeUTC();
  updateCurrentDay();

  // Update the current time every second
  setInterval(updateCurrentTimeUTC, 1000);
});

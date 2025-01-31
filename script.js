const $dateForm = document.querySelector(".date-form");

const $dayInput = document.querySelector("#day-input");
const $monthInput = document.querySelector("#month-input");
const $yearInput = document.querySelector("#year-input");

const $dayOutput = document.querySelector("#day-output");
const $monthOutput = document.querySelector("#month-output");
const $yearOutput = document.querySelector("#year-output");

const $dayError = document.querySelector(".day-error-message");
const $monthError = document.querySelector(".month-error-message");
const $yearError = document.querySelector(".year-error-message");

// console.log($dateForm);

// console.log($dayInput);
// console.log($monthInput);
// console.log($yearInput);

console.log($dayOutput);
console.log($monthOutput);
console.log($yearOutput);

// console.log($dayError);
// console.log($monthError);
// console.log($yearError);

document.addEventListener("DOMContentLoaded", function (e) {
  $dateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const currentDate = new Date(Date.now());
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const yearInput = parseInt($yearInput.value);
    const monthInput = parseInt($monthInput.value);
    const dayInput = parseInt($dayInput.value);

    let dayError = true;
    let monthError = true;
    let yearError = true;

    // console.log(currentDate);
    // console.log(yearInput);
    // console.log(monthInput);
    // console.log(dayInput);

    if ($yearInput.value === "") {
      console.log("YEAR ERROR");
      $yearInput.classList.add("error");
      $yearInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $yearInput.parentElement.querySelector(".error-message").textContent =
        "This field is required";
    } else if (yearInput > currentYear) {
      console.log("YEAR ERROR");
      $yearInput.classList.add("error");
      $yearInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $yearInput.parentElement.querySelector(".error-message").textContent =
        "Must be in the past";
    } else {
      $yearInput.classList.remove("error");
      $yearInput.parentElement
        .querySelector(".input-label")
        .classList.remove("error");
      $yearInput.parentElement.querySelector(".error-message").textContent = "";
      yearError = false;
    }

    if ($monthInput.value === "") {
      console.log("MONTH ERROR");
      $monthInput.classList.add("error");
      $monthInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $monthInput.parentElement.querySelector(".error-message").textContent =
        "This field is required";
    } else if (monthInput > 12 || monthInput < 1) {
      console.log("MONTH ERROR");
      $monthInput.classList.add("error");
      $monthInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $monthInput.parentElement.querySelector(".error-message").textContent =
        "Must be a valid month";
    } else if (yearInput === currentYear && monthInput > currentMonth) {
      console.log("MONTH ERROR");
      $monthInput.classList.add("error");
      $monthInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $monthInput.parentElement.querySelector(".error-message").textContent =
        "Must be in the past";
    } else {
      $monthInput.classList.remove("error");
      $monthInput.parentElement
        .querySelector(".input-label")
        .classList.remove("error");
      $monthInput.parentElement.querySelector(".error-message").textContent =
        "";
      monthError = false;
    }

    if ($dayInput.value === "") {
      console.log("DAY ERROR");
      $dayInput.classList.add("error");
      $dayInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $dayInput.parentElement.querySelector(".error-message").textContent =
        "This field is required";
    } else if (
      dayInput > 31 ||
      dayInput < 1 ||
      dayInput > new Date(yearInput, monthInput, 0).getDate()
    ) {
      console.log("DAY ERROR");
      $dayInput.classList.add("error");
      $dayInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $dayInput.parentElement.querySelector(".error-message").textContent =
        "Must be a valid day";
    } else if (
      yearInput === currentYear &&
      monthInput === currentMonth &&
      dayInput > currentDay
    ) {
      console.log("DAY ERROR");
      $dayInput.classList.add("error");
      $dayInput.parentElement
        .querySelector(".input-label")
        .classList.add("error");
      $dayInput.parentElement.querySelector(".error-message").textContent =
        "Must be in the past";
    } else {
      $dayInput.classList.remove("error");
      $dayInput.parentElement
        .querySelector(".input-label")
        .classList.remove("error");
      $dayInput.parentElement.querySelector(".error-message").textContent = "";
      dayError = false;
    }

    if (dayError || monthError || yearError) return;

    let days = currentDay - dayInput;
    let months = currentMonth - monthInput;
    let years = currentYear - yearInput;

    if (days < 0) {
      days += 31;
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    $dayOutput.textContent = days;
    $monthOutput.textContent = months;
    $yearOutput.textContent = years;
  });

  console.log("---------------------------------------------------");
});

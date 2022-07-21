let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector("seconds");
let main = document.querySelector(".main");
let sec = document.getElementById("sec");
console.log(sec);

setInterval(() => {
  let s = new Date();
  let d = new Date();
  d.setHours(23, 59, 59);
  d.setDate(30);
  let remainingdays = d.getDate();
  let currntday = s.getDate();
  let balanceDays = remainingdays - currntday;
  let balanceHours = d.getHours() - s.getHours();
  let balanceMinutes = d.getMinutes() - s.getMinutes();
  let balanceSeconds = d.getSeconds() - s.getSeconds();

  days.textContent = balanceDays;
  hours.textContent = balanceHours;
  minutes.textContent = balanceMinutes;
  sec.textContent = balanceSeconds;
}, 1000);

const husbandName = document.getElementById("husband");
const numberOfKids = document.getElementById("kids");
const hisJob = document.getElementById("his-job");
const yourJob = document.getElementById("your-job");
const weddingColors = document.getElementById("colors");
const honeymoon = document.getElementById("honeymoon");
const car = document.getElementById("car");
const modal = document.getElementById("modal");

function getHusband() {
  console.log("husband");
}

function getKids() {
  console.log("kids");
}

getHisJob = () => {
  console.log("his job");
};

getYourJob = () => {
  console.log("your-job");
};

getWeddingColors = () => {
  console.log("wedding colors");
};

getHoneymoon = () => {
  console.log("honeymoon");
};

getCar = () => {
  console.log("car");
};

husband.addEventListener("click", getHusband);
numberOfKids.addEventListener("click", getKids);
hisJob.addEventListener("click", getHisJob);
yourJob.addEventListener("click", getYourJob);
weddingColors.addEventListener("click", getWeddingColors);
honeymoon.addEventListener("click", getHoneymoon);
car.addEventListener("click", getCar);

import "./style.scss";

const work = [
  {
    period: "daily",
    current: 5,
    past: 3,
  },
  {
    period: "weekly",
    current: 32,
    past: 36,
  },
  {
    period: "monthly",
    current: 54,
    past: 57,
  },
];

const play = [
  {
    period: "daily",
    current: 0,
    past: 3,
  },
  {
    period: "weekly",
    current: 10,
    past: 8,
  },
  {
    period: "monthly",
    current: 15,
    past: 9,
  },
];

const study = [
  {
    period: "daily",
    current: 2,
    past: 2,
  },
  {
    period: "weekly",
    current: 4,
    past: 7,
  },
  {
    period: "monthly",
    current: 15,
    past: 19,
  },
];

const exercise = [
  {
    period: "daily",
    current: 0,
    past: 2,
  },
  {
    period: "weekly",
    current: 4,
    past: 5,
  },
  {
    period: "monthly",
    current: 5,
    past: 9,
  },
];

const social = [
  {
    period: "daily",
    current: 0,
    past: 1,
  },
  {
    period: "weekly",
    current: 5,
    past: 10,
  },
  {
    period: "monthly",
    current: 9,
    past: 21,
  },
];

const selfcare = [
  {
    period: "daily",
    current: 0,
    past: 1,
  },
  {
    period: "weekly",
    current: 2,
    past: 3,
  },
  {
    period: "monthly",
    current: 5,
    past: 6,
  },
];

//Structure
const workCurrent = document.querySelector(".card-work .hours");
const workLastweek = document.querySelector(".card-work .lastWeek");
const playCurrent = document.querySelector(".card-play .hours");
const playLastweek = document.querySelector(".card-play .lastWeek");
const studyCurrent = document.querySelector(".card-study .hours");
const studyLastweek = document.querySelector(".card-study .lastWeek");
const exerciseCurrent = document.querySelector(".card-exercise .hours");
const exerciseLastweek = document.querySelector(".card-exercise .lastWeek");
const socialCurrent = document.querySelector(".card-social .hours");
const socialLastweek = document.querySelector(".card-social .lastWeek");
const selfcareCurrent = document.querySelector(".card-selfcare .hours");
const selfcareLastweek = document.querySelector(".card-selfcare .lastWeek");

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

let button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    let a = 0;
    while (a < button.length) {
      button[a++].classList.remove("active");
    }
    button[i].classList.add("active");

    if (daily.classList.contains("active") == true) {
      workCurrent.innerText = work[0]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[0]["past"] + "hrs";

      playCurrent.innerText = play[0]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[0]["past"] + "hrs";

      studyCurrent.innerText = study[0]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[0]["past"] + "hrs";

      exerciseCurrent.innerText = exercise[0]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[0]["past"] + "hrs";

      socialCurrent.innerText = social[0]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[0]["past"] + "hrs";

      selfcareCurrent.innerText = selfcare[0]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[0]["past"] + "hrs";
    } else if (weekly.classList.contains("active") == true) {
      workCurrent.innerText = work[1]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[1]["past"] + "hrs";

      playCurrent.innerText = play[1]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[1]["past"] + "hrs";

      studyCurrent.innerText = study[1]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[1]["past"] + "hrs";

      exerciseCurrent.innerText = exercise[1]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[1]["past"] + "hrs";

      socialCurrent.innerText = social[1]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[1]["past"] + "hrs";

      selfcareCurrent.innerText = selfcare[1]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[1]["past"] + "hrs";
    } else if (monthly.classList.contains("active") == true) {
      workCurrent.innerText = work[2]["current"] + "hrs";
      workLastweek.innerText = "Last week - " + work[2]["past"] + "hrs";

      playCurrent.innerText = play[2]["current"] + "hrs";
      playLastweek.innerText = "Last week - " + play[2]["past"] + "hrs";

      studyCurrent.innerText = study[2]["current"] + "hrs";
      studyLastweek.innerText = "Last week - " + study[2]["past"] + "hrs";

      exerciseCurrent.innerText = exercise[2]["current"] + "hrs";
      exerciseLastweek.innerText = "Last week - " + exercise[2]["past"] + "hrs";

      socialCurrent.innerText = social[2]["current"] + "hrs";
      socialLastweek.innerText = "Last week - " + social[2]["past"] + "hrs";

      selfcareCurrent.innerText = selfcare[2]["current"] + "hrs";
      selfcareLastweek.innerText = "Last week - " + selfcare[2]["past"] + "hrs";
    }
  };
}

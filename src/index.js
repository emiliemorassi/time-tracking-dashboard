import "./style.scss";

const buttons = document.querySelectorAll("button");
const current = document.querySelectorAll(".hours");
const previous = document.querySelectorAll(".lastWeek");

const promise = fetch("./data.json");
promise
  .then(async (response) => {
    try {
      const data = await response.json();

      buttons.forEach((button) =>
        button.addEventListener("click", () => {
          const period = button.innerText.toLowerCase();

          current.forEach((curr, i) => {
            const nbrHr = data[i].timeframes[period].current;
            curr.innerHTML = nbrHr + (nbrHr <= 1 ? "hr" : "hrs");
          });

          previous.forEach((prev, i) => {
            const nbrHr = data[i].timeframes[period].previous;
            prev.innerHTML = `Last week: ${
              nbrHr + (nbrHr <= 1 ? "hr" : "hrs")
            } `;
          });
        })
      );
    } catch (e) {
      console.log(e);
    }
  })
  .catch((err) => console.log(err));

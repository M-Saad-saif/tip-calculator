let range_slider = document.querySelector("#range-slider");
let output = document.querySelector("#tipRange");
let amount = document.querySelector("#amount-input");
let answer = document.querySelector("#answer-part");

output.textContent = range_slider.value + "%";

range_slider.addEventListener("input", () => {
  output.textContent = range_slider.value + "%";
});

let resultbtn = document.querySelector("button");
resultbtn.addEventListener("click", () => {
  if (amount.value === "" || isNaN(amount.value)) {
    answer.textContent = "Enter a number";
  } else {
    let total = (amount.value * range_slider.value) / 100;
    answer.innerHTML = total;
  }
});

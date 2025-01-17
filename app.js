/* Created by Tivotal */

let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".button");
let string = "";

//looping through btns
btns.forEach((btn) => {
  //click event listener for each button
  btn.addEventListener("click", (e) => {
    //if clicked btn is equals
    if (e.target.innerHTML === "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerHTML === "AC") {
      //if AC button clicked
      //clearing the string
      string = "";
      screen.value = string;
    } else if (e.target.innerHTML === "Hata") {
      //if del button clicked
      //deleting last digit of string
      string = string.substring(0, string.length - 1);
      screen.value = string;
    } else {
      //other any button clicked
      string += e.target.innerHTML;
      screen.value = string;
    }
  });
});
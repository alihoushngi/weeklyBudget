//class

//variable
let userBudget;
//eventlisteners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    userBudget = prompt("بودجه هفتگی خود را وارد نمایید : ");

    //validate user budget
    if (userBudget === null || userBudget === "" || userBudget === "0") {
      window.location.reload();
    }
  });
}

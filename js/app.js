//class
class Budget {
  constructor(budget) {
    this.budget = budget;
    this.budgetLeft = this.budget;
  }

  substrackBudget(amount) {
    return (this.budgetLeft -= amount);
  }
}

class HTML {
  insertBudget(amount) {
    budgetTotal.innerHTML = amount;
    budgetLeft.innerHTML = amount;
  }

  printMessage(message, className) {
    const div = document.createElement("div");
    div.classList.add("alert", "text-center", className);
    div.textContent = message;
    const primary = document.querySelector(".primary");
    primary.insertBefore(div, addExpenseForm);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
    addExpenseForm.reset();
  }

  insertExpensList(name, amount) {
    const expenses = document.querySelector("#expenses ul");

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
    ${name}
   <span class = "badge badge-primary  badge-pill ">${amount}</span> 
    `;
    expenses.appendChild(li);
  }
  tarckingBudget(amount) {
    const budgetLeftToman = budget.substrackBudget(amount);
    budgetLeft.innerHTML = `${budgetLeftToman}`;

    if (budget.budget / 4 > budgetLeftToman) {
      budgetLeft.parentElement.parentElement.classList.remove(
        "alert-success",
        "alert-warning"
      );
      budgetLeft.parentElement.parentElement.classList.add("alert-danger");
    } else if (budget.budget / 2 > budgetLeftToman) {
      budgetLeft.parentElement.parentElement.classList.remove("alert-success");
      budgetLeft.parentElement.parentElement.classList.add("alert-warning");
    }
  }
}
//variable
let userBudget;
let budget;
let budgetTotal = document.querySelector("span#total");
let budgetLeft = document.querySelector("span#left");
const html = new HTML();
const addExpenseForm = document.querySelector("#add-expense");
//eventlisteners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    userBudget = prompt("بودجه هفتگی خود را وارد نمایید : ");

    //validate user budget
    if (userBudget === null || userBudget === "" || userBudget === "0") {
      window.location.reload();
    } else {
      budget = new Budget(userBudget);
      html.insertBudget(userBudget);
    }
  });

  addExpenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let expense = document.querySelector("#expense").value;
    let amount = document.querySelector("#amount").value;

    if (expense === "" || amount === "") {
      html.printMessage("همه موارد الزامی است", "alert-danger");
    } else {
      html.insertExpensList(expense, amount);
      html.tarckingBudget(amount);
    }
  });
}

$(document).ready(readyNow)

// let firstName = $('#inputFN').val();
// let lastName = $('#inputLN').val();
// let idNumber = $('#inputID').val();
// let jobTitle = $('#inputJT').val();
// let annualSalary = $('#inputAS').val();

let employee = [];
let person = {};
let totMonCost = 0;

function readyNow(){
submitClick();
// calcMonCost();
  console.log('jQuery ready');
}

class Employees {
  constructor(people) {
    this.nameFirst = people.nameFirst
    this.nameLast = people.nameLast
    this.numberID = people.numberID
    this.titleJob = people.titleJob
    this.salaryAnnual = people.salaryAnnual
    this.monthlyCost = people.monthlyCost
    // this.totMonCost = people.totMonCost
  }

}

function submitClick() {
  $('#submitB').on('click', function(){
    let totMonCost = 0;
    let btnClick = new Employees(person);
     btnClick.nameFirst = $('#inputFN').val();
     btnClick.nameLast = $('#inputLN').val();
     btnClick.numberID = $('#inputID').val();
     btnClick.titleJob = $('#inputJT').val();
     btnClick.salaryAnnual = $('#inputAS').val();
     btnClick.monthlyCost = (btnClick.salaryAnnual)/12
     console.log(btnClick);
    $('#tableBody').append('<tr><td>' + btnClick.nameFirst + '<td>' + btnClick.nameLast + '<td>' + btnClick.numberID + '<td>' +  btnClick.titleJob + '<td>' + btnClick.salaryAnnual + '</td></tr')
    employee.push(btnClick);
    $('.employeeForm')[0].reset();
    calcMonCost();
    console.log(employee);
    console.log(btnClick.monthlyCost);
    // firstName.empty();
  })
}

function calcMonCost() {
  for(i = 0; i < employee.length; i++) {
    totMonCost = 0;
  totMonCost += employee[i].monthlyCost;
  console.log(totMonCost);

  }
  // return totMonCost;
// console.log(totMonCost);
}
console.log('js');

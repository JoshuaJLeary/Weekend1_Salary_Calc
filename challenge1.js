$(document).ready(readyNow)

// let firstName = $('#inputFN').val();
// let lastName = $('#inputLN').val();
// let idNumber = $('#inputID').val();
// let jobTitle = $('#inputJT').val();
// let annualSalary = $('#inputAS').val();

let employee = [];

function readyNow(){
submitClick();
  console.log('jQuery ready');
}

class Emploees {
  constructor(person);
}

function submitClick() {
  $('#submitB').on('click', function(){
    let firstName = $('#inputFN').val();
    let lastName = $('#inputLN').val();
    let idNumber = $('#inputID').val();
    let jobTitle = $('#inputJT').val();
    let annualSalary = $('#inputAS').val();
    let btnClick = new Emp(firstName, lastName, idNumber, jobTitle, annualSalary);
    $('#tableBody').append('<tr><td>' + firstName + '<td>' + lastName + '<td>' + idNumber + '<td>' +  jobTitle + '<td>' + annualSalary + '</td></tr')
    employee.push(firstName, lastName, idNumber, jobTitle, annualSalary);
    console.log(employee);
    // firstName.empty();
  })
}
console.log('js');

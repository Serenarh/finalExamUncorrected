// DO NOT edit any existing code. 🛑

// Browser 'modules' must specify exact files and extensions 😞
import employees from './employees.js'
import { getTdsFromData } from './utils/index.js'

const addEmployeeForm = document.querySelector('#add-employee')
const name = addEmployeeForm.querySelector('#name')
const salary = addEmployeeForm.querySelector('#salary')
const dob = addEmployeeForm.querySelector('#dob')
const salaryFilterForm = document.querySelector('#salary-filter-form')
const tbody = document.querySelector('tbody')
const tr = document.querySelector('template').content.querySelector('tr')

const salaryFilter = salaryFilterForm.querySelector('#salary-filter')

const showEmployees = (employeeList = employees) => {
  // Clear out existing employees
  tbody.innerHTML = ''

  employeeList.forEach((employee) => {
    // Clone a 'tr' for each 'employee'
    const trClone = tr.cloneNode()

    getTdsFromData(employee, ['employee_name', 'employee_salary', 'employee_age']).forEach(
      (tdHTML) => {
        trClone.innerHTML += tdHTML
      }
    )

    tbody.appendChild(trClone)
  })
}

showEmployees()

addEmployeeForm.addEventListener('submit', e => {
  e.preventDefault()

  const name2 = name.value
  const salary2 = salary.value
  const dob2 = dob.value

  const employee = { id: employees.length + 1, employee_name: name2, employee_salary: salary2, employee_age: dob2 }

  employees.push(employee)

  showEmployees()
})

salaryFilterForm.addEventListener('submit', e => {
  e.preventDefault()

  /**
 * TODO:
 * 1. Collect 'value' from 'salaryFilter' (VARIABLE already created 👆🏽))
 *
 *
 * 2. Write a 'filter' to only RETURN 'employees' whose 'employee_salary' >= the 'value' you collected 👆🏽.
 * (HINT: 'employee_salary' is a STRING.
 * salaryFilter.value will also be a STRING.
 * Use 'Number.parseInt' to do a meaningful comparison -
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
 *
 * 3. Assign this new ARRAY to a new VARIABLE (e.g. 'filteredEmployees).
 *
 * BONUS 🍄: DESTRUCTURE 'employee_salary' and rename it as 'employeeSalary'
 * https://wesbos.com/destructuring-renaming
 */

  // TODO: Pass 'filteredEmployees' (or whatever VARIABLE name you chose) to update the table 👇🏽
  showEmployees()
})

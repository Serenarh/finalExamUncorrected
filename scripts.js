// DO NOT edit any existing code. 🛑
// TODO: Complete all TODOS, making responsible 'commit's.

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

const showEmployees = (employeeList = employees) => {
  // Clear out existing employees
  tbody.innerHTML = ''

  // Destructure renaming - https://wesbos.com/destructuring-renaming
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

// TODO: Do all coding below this line (and remove this comment, of course).
addEmployeeForm.addEventListener('submit', e => {
  e.preventDefault()

  /**
 * TODO:
 * 1. Get 'values' from 'name', 'salary', 'dob'.
 * (HINT: VARIABLES already created 👆🏽)
 *
 * 2. Convert 'dob' 'value' into an actual age
 *
 * 3. Create an 'employee object' USING SAME PROPERTIES as seen in 'employees.js'. Just add 1 to 'employees.length' for the VALUE of each 'id'.
 *
 * 4. 'employees.push' your new 'employee object'
 * (HINT: yes, you will be MUTATING 'employees' 🙆🏽‍♂️)
 */

  /**
   * DO NOT remove this FUNCTION INVOCATION 🛑
   * It will reload the table for you and
   * you should see your new entry in the 'table'
   * if you have done things correctly.
   */
  showEmployees()
})

salaryFilterForm.addEventListener('submit', e => {
  e.preventDefault()

  /**
 * TODO:
 * 1. Collect 'value' from '#salary-filter'
 * (HINT: 'salaryFilterForm.querySelector')
 *
 * 2. Write a 'filter' to only RETURN 'employees' whose 'employee_salary' >= the 'value' you collected 👆🏽. Assign this new ARRAY to a new VARIABLE (e.g. 'filteredEmployees)
 */

  // TODO: Pass 'filteredEmployees' (or whatever VARIABLE name you chose) to update the table 👇🏽
  showEmployees()
})

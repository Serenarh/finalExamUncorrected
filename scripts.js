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

  const name2 = name.value // hold value entered for name
  const salary2 = salary.value // hold value entered for salary
  const dob2 = dob.value // hold value entered for dob

  // create an employee object
  const employee = { id: employees.length + 1, employee_name: name2, employee_salary: salary2, employee_age: dob2 }

  employees.push(employee) // push employee object into employees

  showEmployees()
})

salaryFilterForm.addEventListener('submit', e => {
  e.preventDefault()

  const minSalary = salaryFilter.value // hold value entered for salary filter

  // filtered employees put in minSalEmps
  const minSalEmps = employees.filter(employee => Number.parseInt(employee.employee_salary, 10) >= Number.parseInt(minSalary, 10))

  const filteredEmployees = minSalEmps // new array of employees assigned to new variable

  showEmployees(filteredEmployees) // populate table with data from filteredEmployees
})

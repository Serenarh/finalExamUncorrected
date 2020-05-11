// DO NOT edit any existing code. 🛑
// TODO: Complete all TODOS, making responsible 'commit's.

// Browser 'modules' must specify exact files and extensions 😞
import employees from './employees.js'
import { getTdsFromData } from './utils/index.js'

const tbody = document.querySelector('tbody')
const tr = document.querySelector('template').content.querySelector('tr')

const showEmployees = () => {
  // Destructure renaming - https://wesbos.com/destructuring-renaming
  employees.forEach((employee) => {
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

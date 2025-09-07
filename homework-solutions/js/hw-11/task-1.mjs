class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }
  set profession(value) {
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number') {
      throw new Error('Salary must be a number');
    }
    if (isNaN(value)) {
      throw new Error('Salary must not be a NaN');
    }
    if (value <= 0) {
      throw new Error('Salary should be bigger than null');
    }
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const emp = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp.firstName); // "John"
emp.salary = 3100;
console.log(emp.salary); // 3100
class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }
  set title(val) {
    this._title = val;
  }
  get phone() {
    return this._phone;
  }
  set phone(val) {
    this._phone = val;
  }
  get address() {
    return this._address;
  }
  set address(val) {
    this._address = val;
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Argument must be an instance of Employee');
    }
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };

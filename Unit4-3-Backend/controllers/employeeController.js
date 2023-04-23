const BaseController = require("./baseController");
const EmployeeModel = require("../models/employee");
class Employee extends BaseController {
  constructor() {
    super(EmployeeModel, Employee);
  }
}
module.exports = new Employee();

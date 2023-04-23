class BaseController {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  create(params, callback) {
    this.model.create(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }

      return callback(null, dbNewObject);
    });
  }

  findBySalary(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ salary: -1 });
  }

  findByExperience(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ experience: -1 });
  }

  findByEmployeeId(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ employee_d: -1 });
  }
}
module.exports = BaseController;

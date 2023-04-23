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

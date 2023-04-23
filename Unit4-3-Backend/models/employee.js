// Dependencies
var mongoose = require("mongoose");
var AutoIncrement = require("mongoose-sequence")(mongoose);

// Schema
var employeeSchema = new mongoose.Schema({
  employee_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  salary: {
    type: String,
  },
  grade: {
    type: String,
  },
  date_of_joining: {
    type: String,
  },
  last_working_day: {
    type: String,
    default: null,
  },
  status: {
    type: String,
  },
});
employeeSchema.plugin(AutoIncrement, {
  id: "order_seq",
  inc_field: "employee_id",
});

// Return model
module.exports = mongoose.model("Employee", employeeSchema, "employee");

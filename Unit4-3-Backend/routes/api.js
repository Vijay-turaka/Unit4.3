// Dependencies
var express = require("express");
var router = express.Router();

// Models
var BaseController = require("../models/employee");
const EmployeeController = require("../controllers/employeeController");

// Routes

router.get("/", (req, res) => {
  res.send("Hello World22");
});

router.get("/getAllDetails", async (req, res) => {
  try {
    const data = await BaseController.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/addEmployee", async (req, res) => {
  try {
    EmployeeController.create(req.body, (err, employeeResponse) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: employeeResponse,
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const options = { new: true };
    const result = await BaseController.findOneAndUpdate(
      id,
      updatedData,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await BaseController.findOneAndRemove(id);
    res.status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getByEmployeeId", async (req, res) => {
  try {
    EmployeeController.findByEmployeeId({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Return router
module.exports = router;

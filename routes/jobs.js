const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/Job");

// Get job list
router.get("/", (req, res) => {
  Job.findAll()
    .then(jobs => {
      res.render("jobs", { jobs });
    })
    .catch(err => console.log(err));
});

// Desplay job form
router.get("/add", (req, res) => {
  res.render("add");
});

// Add a job
router.post("/add", (req, res) => {
  const data = {
    title: "Looking for a back end developer",
    technologies: "Nodejs, expressjs",
    budget: "$5000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    contact_email: "user2@gmail.com"
  };
  let { title, technologies, budget, description, contact_email } = data;
  // Insert into table
  Job.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(job => res.redirect("/jobs"))
    .catch(err => console.log(err));
});

module.exports = router;

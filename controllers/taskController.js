const { tasks } = require("../models/taskModel");

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
};

exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task) {
    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index !== -1) {
    const deleted = tasks.splice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).send("Task not found");
  }
};
const { todos, todoItems } = require(".");
const todo = require("../models/todo");

const Todo = require("../models").Todo;
const TodoItem = require("../models").TodoItem;
module.exports = {
  //create record
  create(req,res){
    return Todo
    .create({
      title: req.body.title,
    })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error));
  },
  //find all
  list(req,res){
    return Todo
    .findAll({
        include: [{
            model: TodoItem,
            as: "todoItems",
        }],
    })
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
  },
  //finf by id
  retrieve(req,res){
    return Todo
    .findByPk(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: "todoItems",
      }],
    })
    .then(todo => {
      if(!todo){
        return res.status(404).send({
          message: "Todo not found",
        });
      }
      return res.status(200).send(todo);
    })
    .catch(error => res.status(400).send(error));
  },
  //update
  update(req,res){
    return Todo
    .findByPk(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: "todoItems",
      }],
    })
    .then(todo => {
      if(!todo){
        return res.status(404),send({
          message: "Todo not found",
        });
      }
      return todo.update({
        title: req.body.title || todo.title,
      })
      .then(() => res.status(200).send(todo))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
  //delete record
  destroy(req,res){
    return Todo
    .findByPk(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: "todoItems",
      }]
    })
    .then(todo => {
      if(!todo){
        return res.status(404).send({
          message: "Todo not found",
        });
      }
      return todo.destroy()
      .then(()=> res.status(200).send({
        message: "Todo delete successfully..."
      }))
      .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },
};
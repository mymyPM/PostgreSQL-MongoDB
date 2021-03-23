const TodoItem = require("../models").TodoItem;

module.exports = {
    //insert record
    create(req,res){
        return TodoItem
        .create({
            content: req.body.content,
            todoId: req.params.todoId,
        })
        .then(todoItem => res.status(201).send(todoItem))
        .catch(error => res.status(400).send(error));
    },
    //find all
    list(req,res){
        return TodoItem
        .findAll({})
        .then(todoItems => res.status(200).send(todoItems))
        .catch(error => res.status(400).send(error));
      },
    //update record
    update(req,res){
        return TodoItem
        .findAll({
            where: {
                id: req.params.todoItemId,
                todoId: req.params.todoId,
            }
        })
        .then(todoItem => {
            if(!todoItem){
                return res.status(404).send({
                    message: "Todo item not found"
                });
            }
            return todoItem.update({
                content: req.body.content || todoItem.content,
                complete: req.body.complete || todoItem.complete,
            })
            .then(() => res.status(200).send(todoItem))
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error));
    },
    destroy(req,res){
        return TodoItem
        .findAll({
            where: {
                id: req.params.todoItemId,
                todoId: req.params.todoId,
            },
        })
        .then(todoItem => {
            if(!todoItem){
                return res.status(404).send({
                    message: "TodoItem not found",
                });
            }
            return todoItem.destroy()
            .then(() => res.status(200).send({
                message: "TodoItem delete successfully..."
            }))
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error));
    },
    
};
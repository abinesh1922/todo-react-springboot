package com.backend.todo_backend.controller;

import com.backend.todo_backend.model.Todo;
import com.backend.todo_backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TodoController {
    @Autowired
    TodoService service;
    @GetMapping("/{id}")
    ResponseEntity<Todo> getTodoById(@PathVariable Long id){
        return new ResponseEntity<>(service.getTodoById(id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<String> deleteById(@PathVariable Long id){
        return new ResponseEntity<>(service.deleteTodoById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    ResponseEntity<Todo> createTodoById(@RequestBody Todo todo){
        return new ResponseEntity<>(service.createTodo(todo), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete")
    ResponseEntity<String> deleteAllTodo(){
        return new ResponseEntity<>(service.deleteAllTodo(), HttpStatus.OK);
    }

    @GetMapping
    ResponseEntity<List<Todo>> getAllTodo(){
        return new ResponseEntity<>(service.getAllTodo(), HttpStatus.OK);
    }
}

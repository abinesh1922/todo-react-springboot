package com.backend.todo_backend.service;

import com.backend.todo_backend.model.Todo;
import com.backend.todo_backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    TodoRepository repository;

    public Todo createTodo(Todo todo) {
        return repository.save(todo);
    }

    public Todo getTodoById(Long id) {
        return repository.findById(id).orElseThrow(()->new RuntimeException("Id not found!!!"));
    }
}

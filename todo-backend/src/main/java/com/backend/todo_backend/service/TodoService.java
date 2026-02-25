package com.backend.todo_backend.service;

import com.backend.todo_backend.model.Todo;
import com.backend.todo_backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

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

    public String deleteTodoById(Long id){
        repository.deleteById(id);
        String result = "Deleted - " + id;
        return result;
    }

    public List<Todo> getAllTodo(){
        return repository.findAll();
    }

    public String  deleteAllTodo(){
        repository.deleteAll();
        return "Deleted Successfully";
    }
}

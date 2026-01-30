package com.backend.todo_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data

public class Todo {
    @Id
    @GeneratedValue
    long id;
    @NotBlank
    @NotNull
    String title;
    @NotBlank
    @NotNull
    String description;
    Boolean isCompleted;
}

package edu.acc.todo.todo;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class ToDoServiceTest {

    @Autowired
    ToDoRepository toDoRepository;

    @Autowired
    ToDoService toDoService;

    @Test
    void fetchToDosShouldReturnExistingToDos() {
        ToDo toDo1 = toDoService.createToDo(new ToDo(null, "abc", false));
        ToDo toDo2 = toDoService.createToDo(new ToDo(null, "def", false));
        ToDo toDo3 = toDoService.createToDo(new ToDo(null, "ghi", true));

        assertThat(toDoService.fetchToDos())
                .containsAll(List.of(toDo1, toDo2, toDo3));
    }

    @Test
    void createToDoShouldSaveAndReturnToDos() {
        ToDo toDo = toDoService.createToDo(new ToDo(null, "my task", false));
        assertThat(toDo.getId()).isNotNull();
        assertThat(toDo.getNote()).isEqualTo("my task");
        assertThat(toDo.getIsCompleted()).isEqualTo(false);
    }

    @Test
    void deleteTodoShouldDeleteTheSpecifiedToDo() {
        ToDo toDo = toDoService.createToDo(new ToDo(null, "abc", false));
        toDoRepository.findById(toDo.getId()).orElseThrow();

        toDoService.deleteToDo(toDo.getId());
        Optional<ToDo> maybeToDo = toDoRepository.findById(toDo.getId());
        assertThat(maybeToDo).isEmpty();
    }
}

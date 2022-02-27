import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        if (status === "All") {
            return priorities.length
                ? todoList.filter(
                      (todo) =>
                          todo.name.includes(searchText) &&
                          priorities.includes(todo.priority)
                  )
                : todoList.filter((todo) => todo.name.includes(searchText));
        }

        return todoList.filter(
            (todo) =>
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priorities.length
                    ? todo.name.includes(searchText) &&
                      priorities.includes(todo.priority)
                    : true)
        );
    }
);

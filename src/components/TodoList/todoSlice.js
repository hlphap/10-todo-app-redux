const initialState = [
    {
        id: 1,
        name: "Lear Yoga",
        completed: false,
        priority: "Medium",
    },
    {
        id: 2,
        name: "Lear Redux",
        completed: true,
        priority: "High",
    },
    {
        id: 3,
        name: "Lear ReactJS",
        completed: false,
        priority: "Low",
    },
];

const todoSlice = (state = initialState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        case "todoList/toggleTodoStatus":
            return state.map((todo) =>
                todo.id === action.payload
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            );
        default:
            return state;
    }
};

export default todoSlice;

const createInitState = () => ({
    tasks: [
        { name: "Create App", who: "self", complete: false },
        { name: "Get a job", who: "Triplebyte", complete: false },
        { name: "World Peace", who: "All together", complete: false },
    ]
})

const initState = createInitState();

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "createTask":
            return { ...state,
                    tasks: [...state.tasks, { name: action.payload, who: "self" }]
                };
        default:
            return state;
    }
} 

export default reducer;
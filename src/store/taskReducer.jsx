
const defaultState = {
	tasks: []
}


export const taskReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "NEW_TASK":
			return {...state, tasks:[...state.tasks, action.payload]}
        case "TASK_CHANGE_STATUS":
            return {...state, tasks:state.tasks.map((item) => (item.id == action.payload.id)?{...item, done:!(item.done)}:item)}
		case "DELETE_TASK":
			return {...state, tasks:state.tasks.filter((item) => item.id != action.payload)}
		case "UPDATE_TASK":
			return {...state, tasks:state.tasks.map((item) => (item.id == action.payload.id)?{...item, name:action.payload.text}:item)}
		default:
			return state
	}
}



const defaultState = {
	modal: false
}


export const modalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "MODAL_CHANGE_VISIBLE":
			return {...state, modal: {status:!state.modal.status, task:action.payload}}
		default:
			return state
	}
}


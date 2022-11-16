import { ADD__FILTER, CLEAR__FILTER, REMOVE__FILTER } from "./filter-actions";


export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD__FILTER: {
            if (state.includes(action.filter)) {
                return state
            }
            return [...state, action.filter]
        }
        case REMOVE__FILTER: {
            return state.filter(item => item !== action.filter)
        }
        case CLEAR__FILTER: {
            return []
        }
        default: {
            return state
        }
    }
}
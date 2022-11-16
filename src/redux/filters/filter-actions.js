export const ADD__FILTER = 'ADD__FILTER'
export const REMOVE__FILTER = 'REMOVE__FILTER'
export const CLEAR__FILTER = 'CLEAR__FILTER'

export const addFilter = (filter) => ({
    type: ADD__FILTER,
    filter
})
export const removeFilter = (filter) => ({
    type: REMOVE__FILTER,
    filter
})
export const clearFilter = {
    type: CLEAR__FILTER,
}
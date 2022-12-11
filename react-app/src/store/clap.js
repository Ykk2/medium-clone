import { csrfFetch } from './csrf'

const LOAD_CLAPS = '/claps/LOAD_CLAPS'
const ADD_CLAP = '/claps/ADD_CLAP'
const DELETE_CLAP = '/claps/DELETE_CLAP'

const getClaps = claps => {
    return {
        type: LOAD_CLAPS, claps
    }
}

const addClap = clap => {
    return {
        type: ADD_CLAP, clap
    }
}

const deleteClap = clap => {
    return {
        type: DELETE_CLAP, clap
    }
}


// Need to fix api routes for fetch + paramaters
export const gettingClaps = () => async dispatch => {
    const response = await csrfFetch('/api/stories/claps')
    if (response.ok) {
        const claps = await response.json()
        dispatch(getClaps(claps))
        return claps
    }
}

export const addingClap = () => async dispatch => {
    const response = await csrfFetch('/api/stories/claps')
    if (response.ok) {
        const clap = await response.json()
        dispatch(addClap(clap))
        return clap
    }
}

export const deletingClap = () => async dispatch => {
    const response = await csrfFetch('/api/stories/claps')
    if (response.ok) {
        const clap = await response.json()
        dispatch(deleteClap(clap))
    }
}

export default function reducer(state = { oneClap: {}, allClaps: {} }, action) {
    switch (action.type) {
        case LOAD_CLAPS: {
            const newState = { oneClap: {}, allClaps: {} }
            action.claps.Clap.forEach(e => {
                newState.allClaps[e.id] = e
            })
            return newState
        }
        case ADD_CLAP: {
            const newState = { ...state, oneClap: { ...state.oneClap }, allClaps: { ...state.allClaps } }
            newState.oneClap = action.clap
            return newState
        }
        case DELETE_CLAP: {
            const newState = { ...state, oneClap: { ...state.oneClap }, allClaps: { ...state.allClaps } }
            delete newState.allClaps[action.clap.id]
            return newState
        }
        default: return state
    }
}

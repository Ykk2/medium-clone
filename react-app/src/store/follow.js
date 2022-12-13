import { csrfFetch } from "./csrf";

const LOAD_FOLLOWS = '/follows/LOAD_FOLLOWS'
const ADD_FOLLOW = '/follows/ADD_FOLLOW'
const DELETE_FOLLOW = '/follows/DELETE_FOLLOW'

const getFollows = follows => {
    return {
        type: LOAD_FOLLOWS, follows
    }
}

const addFollow = follow => {
    return {
        type: ADD_FOLLOW, follow
    }
}

const deleteFollow = follow => {
    return {
        type: DELETE_FOLLOW, follow
    }
}

// Need to fix api routes for fetch + params
export const gettingFollows = (id) => async dispatch => {
    const response = await fetch(`/api/stories/follows/${id}`)
    if (response.ok) {
        const follows = await response.json()
        dispatch(getFollows(follows))
        return follows
    }
}

export const addingFollow = () => async dispatch => {
    const response = await csrfFetch('/api/follows')
    if (response.ok) {
        const follow = await response.json()
        dispatch(addFollow(follow))
        return follow
    }
}

export const deletingFollow = () => async dispatch => {
    const response = await csrfFetch('/api/follows')
    if (response.ok) {
        const follow = await response.json()
        dispatch(deleteFollow(follow))
    }
}

export default function reducer(state = { oneFollow: {}, allFollows: {} }, action) {
    switch (action.type) {
        case LOAD_FOLLOWS: {
            const newState = { oneFollow: {}, allFollows: {} }
            action.follows.Followers.forEach(e => {
                newState.allFollows[e] = e
            })
            return newState
        }
        case ADD_FOLLOW: {
            const newState = { ...state, oneFollow: { ...state.oneFollow }, allFollows: { ...state.allFollows } }
            newState.oneFollow = action.follow
            return newState
        }
        case DELETE_FOLLOW: {
            const newState = { ...state, oneFollow: { ...state.oneFollow }, allFollows: { ...state.allFollows } }
            delete newState.allFollows[action.follow.id]
            return newState
        }
        default: return state
    }
}

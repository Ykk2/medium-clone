import { csrfFetch } from "./csrf";

const LOAD_FOLLOWS = '/follows/LOAD_FOLLOWS'
const ADD_FOLLOW = '/follows/ADD_FOLLOW'
const DELETE_FOLLOW = '/follows/DELETE_FOLLOW'

const getFollows = followers => {
    return {
        type: LOAD_FOLLOWS, followers
    }
}

const addFollow = follower => {
    return {
        type: ADD_FOLLOW, follower
    }
}

const deleteFollow = userId => {
    return {
        type: DELETE_FOLLOW, userId
    }
}

// Need to fix api routes for fetch + params
export const gettingFollows = (userId) => async dispatch => {
    const response = await fetch(`/api/follows/${userId}`)
    if (response.ok) {
        const followers = await response.json()
        dispatch(getFollows(followers))
        return followers
    }
}

export const addingFollow = (userId) => async dispatch => {
    const response = await fetch(`/api/follows/${userId}`, {

        method: "POST"
    })

    if (!response.error) {
        const follower = await response.json()
        dispatch(addFollow(follower))
        return follower
    }
}

export const deletingFollow = (userId) => async dispatch => {
    const response = await fetch(`/api/follows/${userId}`, {

        method: 'DELETE'
    })

    if (!response.error) {
        const follower = await response.json()
        dispatch(deleteFollow(userId))
        return follower
    }
}

export default function reducer(state = { Followers: {}, totalFollowers: 0 }, action) {
    switch (action.type) {
        case LOAD_FOLLOWS: {
            const newState = { Followers: {...state.Followers}, totalFollowers: 0}
            action.followers.Followers.forEach(follower => {
                newState.Followers[follower.id] = follower

                newState.totalFollowers = action.followers.totalFollowers
            })
            return newState
        }
        case ADD_FOLLOW: {
            const newState = { Followers: { ...state.Followers }, totalFollowers: 0 }

            newState.Followers[action.follower.follower.id] = action.follower.follower

            newState.totalFollowers = action.follower.totalFollowers
            return newState
        }
        case DELETE_FOLLOW: {
            const newState = { Followers: {...state.Followers}, totalFollowers: state.totalFollowers }

            delete newState.Followers[action.userId]
            newState.totalFollowers--
            return newState
        }
        default: return state
    }
}

import CreateResponse from '../components/CreateResponse/CreateResponse'
import { csrfFetch } from './csrf'
const LOAD_RESPONSE = 'response/LOAD_RESPONSES'
const ADD_RESPONSE = 'response/ADD_RESPONSE'
const DELETE_RESPONSE = 'response/DELETE_RESPONSE'

const loadResponses = responses => {
    return {
        type: LOAD_RESPONSE, responses
    }
}

const addResponse = response => {
    return {
        type: LOAD_RESPONSE, response
    }
}

const deleteResponse = response => {
    return {
        type: DELETE_RESPONSE, response
    }
}

// switched to res instead of response for our fetch calls

export const getResponses = storyId => async dispatch => {
    const res = await fetch(`/api/responses/${storyId}`)
    if (res.ok) {
        const responses = await res.json()
        // console.log("XXXXXXXXXXXXXXXXXXXXXXXX responses = ", responses)
        dispatch(loadResponses(responses))
        return responses
    }
}

export const addingResponse = (responseObj) => async dispatch => {
    const { response , userId, storyId } = responseObj
    // console.log("THIS IS RES ")
    const res = await csrfFetch(`/api/responses/${storyId}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(responseObj)
    })
    if (res.ok) {
        const response = await res.json()
        console.log("ADDINGRESPONSE THUNK === ", response)
        // response.user = user
        dispatch(addResponse(response))
        return response
    }
}

export const deletingResponse = id => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, { method: 'DELETE' })
    if (res.ok) {
        const response = await res.json()
        dispatch(deleteResponse(response))
        return response
    }
}


export default function reducer(state = { oneResponse: {}, allResponses: {} }, action) {
    switch (action.type) {
        case LOAD_RESPONSE: {
            const newState = { oneResponse: {}, allResponses: {} }
            action.responses.forEach(e => {
                // console.log("eeeeeeeeeeeeeeeee = ", e)
                newState.allResponses[e.storyId] = e
                // console.log("NEW STATE IN REDUCER =====, ", newState.allResponses[e.storyId])
            })
            // console.log('THIS IS THE REDUCER', newState)
            return newState
        }
        case ADD_RESPONSE: {
            const newState = { ...state, oneResponse: { ...state.oneResponse }, allResponses: { ...state.allResponses } }
            newState.allResponses = action.response
            return newState
        }
        case DELETE_RESPONSE: {
            const newState = { ...state, oneResponse: { ...state.oneResponse }, allResponses: { ...state.allResponses } }
            delete newState.allResponses[action.response]
            return newState
        }
        default: return state
    }
}

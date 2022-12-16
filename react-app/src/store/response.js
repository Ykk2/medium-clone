const LOAD_RESPONSE = 'response/LOAD_RESPONSES'
const ADD_RESPONSE = 'response/ADD_RESPONSE'
const EDIT_RESPONSE = 'response/EDIT_RESPONSE'
const DELETE_RESPONSE = 'response/DELETE_RESPONSE'
const LOAD_ONE_RESPONSE = '/response/LOAD_ONE_RESPONSE'

const loadResponses = responses => {
    return {
        type: LOAD_RESPONSE, responses
    }
}

const addResponse = response => {
    return {
        type: ADD_RESPONSE, response
    }
}

const editResponse = response => {
    return {
        type: EDIT_RESPONSE, response
    }
}

const deleteResponse = response => {
    return {
        type: DELETE_RESPONSE, response
    }
}

const loadOneResponse = response => {
    return {
        type: LOAD_ONE_RESPONSE, response
    }
}

// switched to res instead of response for our fetch calls

export const getResponses = storyId => async dispatch => {
    const res = await fetch(`/api/responses/${storyId}`)
    if (res.ok) {
        const responses = await res.json()
        dispatch(loadResponses(responses))
        return responses
    }
}

export const addingResponse = (responseObj) => async (dispatch) => {

    const { response, storyId } = responseObj
    // console.log("STORYID ========= ", storyId)
    // console.log("response ======== ", response)
    // console.log("responseOBJ ======== ", responseObj)

    const res = await fetch(`/api/responses/${storyId}/responses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "body": response, "storyId": storyId })

    })
    console.log("this is res ===== ", res)
    if (res.ok) {
        const createResponse = await res.json()
        // console.log("ADDINGRESPONSE THUNK === ", response)
        // response.user = user
        dispatch(addResponse(createResponse))
        return createResponse
    }
}

export const editingResponse = (payload) => async (dispatch) => {
    const { responseId } = payload;
    const responseFetch = await fetch(`/api/responses/${responseId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    if (responseFetch.ok) {
        const editedResponse = await responseFetch.json();
        console.log("EDITEDRESPONSE*(******** = ", editedResponse)
        dispatch(editResponse(editedResponse))

        return editedResponse;
    }
}

export const deletingResponse = payload => async dispatch => {
    const res = await fetch(`/api/responses/${payload}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteResponse(payload))
    }
}

export const clapResponse = (id, responseId) => async dispatch => {
    const response = await fetch(`/api/responses/claps/${responseId}`, {
        method: 'POST', body: { id: id, reponseId: responseId }
    })
    if (response.ok) {
        return
    }
}

export const getOneResponse = (storyId, responseId) => async dispatch => {
    const res = await fetch(`/api/responses/${storyId}/${responseId}`)

    if (res.ok) {
        const response = await res.json()
        dispatch(loadOneResponse(response))
        return response
    }
}


export default function reducer(state = { oneResponse: {}, allResponses: {} }, action) {
    switch (action.type) {
        case LOAD_RESPONSE: {
            const newState = { oneResponse: {}, allResponses: {} }
            action.responses.forEach(e => {
                newState.allResponses[e.id] = e
            })
            return newState
        }
        case LOAD_ONE_RESPONSE: {
            const newState = { ...state, oneResponse: {}, allResponses: { ...state.allResponses } }
            newState.oneResponse = action.response
            return newState
        }
        case ADD_RESPONSE: {
            const newState = { ...state, oneResponse: { ...state.oneResponse }, allResponses: { ...state.allResponses } }
            newState.allResponses[action.response.id] = action.response
            // newState.oneResponse = action.response
            return newState
        }

        case EDIT_RESPONSE: {
            // console.log("HI MOM ============")
            const newState = { ...state, oneResponse: { ...state.oneResponse }, allResponses: { ...state.allResponses } }
            newState.allResponses[action.response.id] = action.response
            newState.oneResponse = action.response
            // console.log("EDIT_RESPONSE newSTATE ====== ", newState.oneResponse[action.response.id])
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

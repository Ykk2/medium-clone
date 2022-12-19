const LOAD_ALL_STORIES = '/stories/LOAD_ALL_STORIES'
const LOAD_ONE_STORY = '/stories/LOAD_ONE_STORY'
const ADD_STORY = '/stories/ADD_STORY'
const EDIT_STORY = '/stories/EDIT_STORY'
const DELETE_STORY = '/stories/DELETE_STORY'

const allStories = stories => {
    return {
        type: LOAD_ALL_STORIES, stories
    }
}

const oneStory = story => {
    return {
        type: LOAD_ONE_STORY, story
    }
}

const addStory = story => {
    return {
        type: ADD_STORY, story
    }
}

const editStory = story => {
    return {
        type: EDIT_STORY, story
    }
}

const deleteStory = story => {
    return {
        type: DELETE_STORY, story
    }
}

export const getAllStories = () => async dispatch => {
    const response = await fetch(`/api/stories`)
    if (response.ok) {
        const stories = await response.json()
        dispatch(allStories(stories))
        return stories
    }
}

export const getOneStory = (storyId) => async dispatch => {
    const response = await fetch(`/api/stories/${storyId}`)
    if (response.ok) {
        const story = await response.json()
        dispatch(oneStory(story))
        return story
    }
}

export const addingStory = (story) => async dispatch => {
    const response = await fetch(`/api/stories/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = await response.json()
        dispatch(addStory(story))
        return story
    }
}

export const edittingStory = (story, id) => async dispatch => {
    const response = await fetch(`/api/stories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = response.json()
        dispatch(editStory(story))
        return story
    }
}

export const deletingStory = id => async dispatch => {
    const response = await fetch(`/api/stories/${id}`, { method: 'DELETE' })
    if (response.ok) {
        const story = await response.json()
        await dispatch(deleteStory(id))
        return story

    }
}

export const addLike = (id, userId) => async dispatch => {
    const response = await fetch(`/api/stories/claps/${id}`, {
        method: 'POST', body: { userId: userId, storyId: id }
    })
    if (response.ok) {
        return
    }
}

export const getMyStories = (userId) => async dispatch => {
    const response = await fetch(`/api/stories/user/${userId}/mine`)

    if (response.ok) {
        const stories = await response.json()

        dispatch(allStories(stories))
        return stories

    }
}

export const getFollowingStories = (userId) => async dispatch => {
    const response = await fetch(`/api/stories/user/${userId}/following`)
    console.log(response)
    if (response.ok) {
        const followingStories = await response.json()
        dispatch(allStories(followingStories))
        console.log(followingStories)
        return followingStories
    }
}

// We definitely need to change logic in this reducer
export default function reducer(state = { oneStory: {}, allStories: {} }, action) {
    switch (action.type) {
        case LOAD_ALL_STORIES: {
            const newState = { oneStory: {}, allStories: {} }
            action.stories.Stories.forEach(e => {

                newState.allStories[e.storyId] = e
            })
            // newState.allStories = action.stories
            return newState
        }
        case LOAD_ONE_STORY: {
            const newState = { oneStory: {}, allStories: {} }
            newState.oneStory = action.story
            return newState
        }
        case ADD_STORY: {
            const newState = { ...state, oneStory: { ...state.story }, allStories: { ...state.allStories } }
            newState.story = action.story
            return newState
        }
        case EDIT_STORY: {
            const newState = { ...state, oneStory: { ...state.story }, allStories: { ...state.allStories } }
            newState.allStories[action.story.id] = action.story
            newState.story = action.story
            return newState
        }
        case DELETE_STORY: {
            const newState = { ...state, oneStory: { ...state.story }, allStories: { ...state.allStories } }
            delete newState.allStories[action.story]
            return newState
        }
        default: return state
    }

}

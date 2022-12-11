const LOAD_ALL_STORIES = '/stories/LOAD_ALL_STORIES'
const LOAD_ONE_STORY = '/stories/LOAD_ONE_STORY'
const ADD_STORY = '/stories/ADD_STORY'
const EDIT_STORY = '/stories/EDIT_STORY'
const DELETE_STORY = '/stories/DELETE_STORY'
import { csrfFetch } from './csrf'

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
    const response = await csrfFetch('/api/stories')
    if (response.ok) {
        const stories = await response.json()
        dispatch(allStories(stories))
        return stories
    }
}

export const getOneStory = (storyId) => async dispatch => {
    const response = await fetch('/api/stories/${storyId}')
    if (response.ok) {
        const story = await response.json()
        dispatch(oneStory(story))
        return story
    }
}

export const addingStory = story => async dispatch => {
    const response = await csrfFetch('/api/stories', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = await response.json()
        dispatch(addStory(story))
        return story
    }
}

export const edittingStory = (story, id) => async dispatch => {
    const response = await csrfFetch('/api/spots/${id}', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = res.json()
        dispatch(editStory(story))
        return story
    }
}

export const deletingStory = id => async dispatch => {
    const response = await csrfFetch('/api/stories/${id}', { method: 'DELETE' })
    if (response.ok) dispatch(deleteStory(id))
}

// We definitely need to change logic in this reducer
export default function reducer(state = { oneStory: {}, allStories: {} }, action) {
    switch (action.type) {
        case LOAD_ALL_STORIES: {
            const newState = { oneStory: {}, allStories: {} }
            action.stories.Story.forEach(e => {
                newState.allStories[e.id] = e
            })
            return newState
        }
        case LOAD_ONE_STORY: {
            const newState = { oneStory: {}, allStories: {} }
            newState.story = action.story
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
            delete newState.allStories[action.story.id]
            return newState
        }
        default: return state
    }

}

const LOAD_FOLLOWERS = '/follows/LOAD_FOLLOWERS'
const LOAD_FOLLOWINGS = '/follows/LOAD_FOLLOWINGS'
const ADD_FOLLOW = '/follows/ADD_FOLLOW'
const DELETE_FOLLOW = '/follows/DELETE_FOLLOW'

const getFollowers = followers => {
    return {
        type: LOAD_FOLLOWERS, followers
    }
}

// const getFollowings = followers => {

//     return {
//         type: LOAD_FOLLOWERS, followers
//     }
// }

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

// GET LIST OF PEOPLE THAT IS FOLLOWING THE USER A
export const gettingFollows = (userId) => async dispatch => {
    const response = await fetch(`/api/follows/${userId}/following`)
    if (response.ok) {
        const followers = await response.json()
        dispatch(getFollowers(followers))
        return followers
    }
}

// GET LIST OF PEOPLE THAT THE USER IS FOLLOWS
export const gettingFollowings = (userId) => async dispatch => {

    const response = await fetch(`/api/follows/${userId}/follower`)

    if (response.ok) {
        const followings = await response.json()
        dispatch(getFollowers(followings))
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

export const deletingFollow = (userId, currentUserId) => async dispatch => {

    const response = await fetch(`/api/follows/${userId}`, {

        method: 'DELETE'
    })

    if (!response.error) {
        const follower = await response.json()
        dispatch(deleteFollow(currentUserId))
        return follower
    }
}

export default function reducer(
    state = { Followers: {}, Followings: {}, totalFollowers: 0 },
    action
  ) {
    switch (action.type) {
      case LOAD_FOLLOWERS: {
        const Followers = {}
        action.followers.Followers.forEach(follower => {
          Followers[follower.id] = follower
        })
        return { Followers, Followings: {}, totalFollowers: action.followers.totalFollowers }
      }
      case LOAD_FOLLOWINGS: {
        const Followings = {}
        action.followings.Followings.forEach(following => {
          Followings[following.id] = following
        })
        return { Followers: {}, Followings, totalFollowers: 0 }
      }
      case ADD_FOLLOW: {
        return {
          Followers: { ...state.Followers, [action.follower.follower.id]: action.follower.follower },
          Followings: {},
          totalFollowers: action.follower.totalFollowers
        }
      }
      case DELETE_FOLLOW: {
        const { [action.userId]: deletedFollow, ...Followers } = state.Followers
        return { Followers, Followings: {}, totalFollowers: state.totalFollowers - 1 }
      }
      default:
        return state
    }
}

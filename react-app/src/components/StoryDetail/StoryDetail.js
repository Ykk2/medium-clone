import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './StoryDetail.css'
import { getOneStory, deletingStory, addLike } from '../../store/story';
import { useEffect, useState } from 'react';
import { gettingFollows, addingFollow, deletingFollow } from '../../store/follow';


const StoryDetail = ({ storyDetails }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const storyImage = storyDetails.image;
    const currentUser = useSelector(state => state.session.user)
    const followers = useSelector(state => state.follow.Followers)
    const followerCount = useSelector(state => state.follow.totalFollowers)
    const followersList = Object.values(followers)


    useEffect(() => {
        dispatch(getOneStory(storyDetails.id))
            .then(() => {
                dispatch(gettingFollows(storyDetails.userId))
            })
    }, [dispatch])


    const increaseClap = (e) => {
        e.preventDefault()
        dispatch(addLike(storyDetails.id, storyDetails.userId)).then(() => {
            dispatch(getOneStory(storyDetails.id))
        })
    }

    const doIFollow = followers => {
        for (let follower in followers) {
            if (follower.id == storyDetails.userId) return true
        }
        return false
    }

    const iFollow = doIFollow(followers)

    const [following, setFollowing] = useState(iFollow)

    const handleFollowClick = (e) => {
        e.preventDefault()
        dispatch(addingFollow(storyDetails.userId))
        dispatch(gettingFollows(storyDetails.userId))
        setFollowing(true)
    }

    const handleRemoveFollowClick = (e) => {
        e.preventDefault()
        dispatch(deletingFollow(storyDetails.userId))
        dispatch(gettingFollows(storyDetails.userId))
        setFollowing(false)
    }


    return (
        <div>
            <h6>{storyDetails.storyUser.firstName} {storyDetails.storyUser.lastName}</h6>
            <button
                onClick={increaseClap}
            >
                <h6>{storyDetails.totalClaps} </h6>

                👏
            </button>
            <h3>{storyDetails.storyUser.bio}</h3>
            <h3>{followerCount}  followers</h3>
            {following ?
                <button onClick={handleRemoveFollowClick}>
                    Unfollow
                </button>
                :
                <button onClick={handleFollowClick}>
                    Follow
                </button>
            }
            <div className='story-image'>
                <img src={storyDetails.image} alt={storyDetails.title}></img>
            </div>
            <h1>{storyDetails.title}</h1>
            <p>{storyDetails.story}</p>
            <div></div>
        </div>
    )
}

export default StoryDetail

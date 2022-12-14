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
        <div className='therealbiggestcontain'>
            <div className='biggestContainer'>
                <div className='topBar'>
                    <div className='authorInfo'>
                        <div className='soloAuthorName'>
                            <i id='profile-review' className="fas fa-user-circle" />

                            {storyDetails.storyUser.firstName} {storyDetails.storyUser.lastName}</div>
                        <div className='followContainer'>
                            <div className='authorFollowers'>{followerCount}  followers</div>
                            {(storyDetails.storyUser.id != currentUser?.id) &&
                                (!iFollow) &&
                                <button className='followBtn'>
                                    Follow!
                                </button>
                            }
                        </div>
                    </div>
                    <div className='clapsContainer'>
                        <div className='totalClaps'>{storyDetails.totalClaps} </div>
                        <button
                            onClick={increaseClap}
                            className='clapBtn'
                        >
                            <div className='clapEmoji'>
                                👏
                            </div>
                        </button>
                    </div>
                </div>
                <div className='story-content'>
                    <div className='storyDetailTitle'>{storyDetails.title}</div>
                    <img src={storyDetails.image} alt={storyDetails.title} className='soloStoryImg'></img>
                    <div className='storyDetailStory'>{storyDetails.story}</div>
                </div>
            </div>
        </div>
    )
}

export default StoryDetail

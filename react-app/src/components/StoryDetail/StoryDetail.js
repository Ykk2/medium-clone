import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import { getOneStory, deletingStory, addLike } from '../../store/story';
import { useEffect, useState } from 'react';
import { gettingFollows, addingFollow, deletingFollow } from '../../store/follow';
import { useParams } from "react-router-dom";
import ResponseModal from "./ResponseModal"
import './StoryDetail.css'

const StoryDetail = ({ storyDetails }) => {

    const dispatch = useDispatch();
    // const history = useHistory();
    // const storyImage = storyDetails.image;
    const currentUser = useSelector(state => state.session.user)
    const followers = useSelector(state => state.follow.Followers)
    const followerCount = useSelector(state => state.follow.totalFollowers)
    const { storyId } = useParams();
    // const followersList = Object.values(followers)

    const [following, setFollowing] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(getOneStory(storyDetails.id))
            .then(() => {
                dispatch(gettingFollows(storyDetails.userId))
            })

    }, [dispatch, storyId])

    useEffect(() => {
        for (let follower in followers) {
            let num = Number(follower)
            if (num === currentUser.id) {
                return setFollowing(true)
            }
            else {
                setFollowing(false)
            }
        }
    }, [followers, dispatch])

    const increaseClap = (e) => {
        e.preventDefault()
        dispatch(addLike(storyDetails.id, storyDetails.userId)).then(() => {
            dispatch(getOneStory(storyDetails.id))
        })
    }

    const handleFollowClick = (e) => {
        e.preventDefault()
        dispatch(addingFollow(storyDetails.userId))

        setFollowing(true)

    }

    const handleRemoveFollowClick = (e) => {
        e.preventDefault()
        dispatch(deletingFollow(storyDetails.userId, currentUser.id))

        setFollowing(false)

    }

    return (
        <div className='therealbiggestcontain'>
            <div className='biggestContainer'>
                <div className='topBar'>
                    <div className='authorInfo'>
                        <div className='soloAuthorName'>
                            <i id='profile-review' className="fas fa-user-circle" />
                            <div className='authorsFirstandLast'>
                                {storyDetails.storyUser.firstName} {storyDetails.storyUser.lastName}</div></div>
                        <div className='followContainer'>
                            <div className='authorFollowers'>{followerCount}  followers</div>
                            {/* {(storyDetails.storyUser.id != currentUser?.id) &&
                                (!iFollow) &&
                                <button className='followBtn'>
                                    Follow!
                                </button>
                            } */}

                            {
                                (storyDetails.storyUser.id !== currentUser?.id) &&

                                (following ?
                                    <button className='followBtn' onClick={handleRemoveFollowClick}>
                                        Unfollow
                                    </button>
                                    :
                                    <button className='followBtn' onClick={handleFollowClick}>
                                        Follow
                                    </button>
                                )}
                        </div>
                    </div>
                    <div className='storyDetailsRightSide'>
                        <div className='clapsContainer'>
                            <div className='totalClaps'>
                                {storyDetails.totalClaps}
                            </div>
                            <button
                                onClick={increaseClap}
                                className='clapBtn'
                            >
                                <div>
                                    <img className='clapEmoji' src={require('./clap.svg').default} alt='svgImage' />

                                </div>
                            </button>
                        </div>
                        <button className='bootyhole' onClick={() => setShowModal(true)}>

                            <img className='responseEmoji' src={require('./responses.svg').default} alt='responseEmoji' />

                        </button>
                    </div>
                </div>
                <div className='story-content'>
                    <div className='storyDetailTitle'>{storyDetails.title}</div>
                    <img src={storyDetails.image} alt={storyDetails.title} className='soloStoryImg'></img>
                    <div className='storyDetailStory'>{storyDetails.story}</div>
                </div>
                {
                    showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        <ResponseModal storyDetails={storyDetails} portalClassName="ResponseModal" />
                    </Modal>
                }
            </div>
        </div>
    )
}

export default StoryDetail

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './StoryDetail.css'
import { getOneStory, deletingStory, addLike } from '../../store/story';
import { useEffect } from 'react';
import { gettingFollows } from '../../store/follow';
import './StoryDetail.css'
const StoryDetail = ({ storyDetails }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const storyImage = storyDetails.image;
    const currentUser = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getOneStory(storyDetails.id)).then(() => {
            dispatch(gettingFollows(storyDetails.userId))
        })

    }, [dispatch])
    // if (!storyImage) return null;
    const followers = useSelector(state => state.follow.allFollows)
    // DELETE STORY TO BE IMPLEMENTED LATER
    const followerCount = Object.keys(followers).length
    // const handleDelete = async (e)=> {
    //     e.preventDefault();

    //     await history.push('/');
    //     await dispatch(deleteStory(storyDetails.id))
    // }
    // useEffect(() => {

    // }, [storyDetails.totalClaps])

    const increaseClap = (e) => {
        e.preventDefault()
        dispatch(addLike(storyDetails.id, storyDetails.userId)).then(() => {
            dispatch(getOneStory(storyDetails.id))
        })
    }
    // if (storyDetails.storyUser.bio == null) {
    //     storyDetails.storyUser.bio = 'testing'
    // }
    const followersList = Object.values(followers)

    const doIFollow = followers => {
        for (let e in followers) {
            if (e == currentUser?.id) return true
        }
        return false
    }
    const iFollow = doIFollow(followers)

    // console.log('LET ME FINISH PLEASE', followersList[0])
    // console.log('THE LAST CHECK', !iFollow, storyDetails.storyUser.id != currentUser.id)
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

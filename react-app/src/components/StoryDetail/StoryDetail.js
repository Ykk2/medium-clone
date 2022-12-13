import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './StoryDetail.css'
import { getOneStory, deletingStory, addLike } from '../../store/story';
import { useEffect } from 'react';
import { gettingFollows } from '../../store/follow';

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
            {(storyDetails.storyUser.id != currentUser?.id) &&
                (!iFollow) &&
                <button>
                    INSERT FOLLOW BUTTON HERE
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

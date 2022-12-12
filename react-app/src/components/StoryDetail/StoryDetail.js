import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './StoryDetail.css'
<<<<<<< HEAD
import { getOneStory, deletingStory } from '../../store/story';
=======
import { getOneStory, deletingStory, addLike } from '../../store/story';
>>>>>>> newStoriesFix
import { useEffect } from 'react';
const StoryDetail = ({ storyDetails }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const storyImage = storyDetails.image;
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getOneStory(storyDetails.id))
    }, [dispatch])
    // if (!storyImage) return null;

    // DELETE STORY TO BE IMPLEMENTED LATER

    // const handleDelete = async (e)=> {
    //     e.preventDefault();

    //     await history.push('/');
    //     await dispatch(deleteStory(storyDetails.id))
    // }
    // useEffect(() => {

    // }, [storyDetails.totalClaps])

    console.log('THIS IS STORY DTAILAS', storyDetails)
    const increaseClap = (e) => {
        e.preventDefault()
        dispatch(addLike(storyDetails.id, storyDetails.userId)).then(() => {
            dispatch(getOneStory(storyDetails.id))
        })
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
            <div className='story-image'>
                <img src={storyDetails.image} alt={storyDetails.title}></img>
            </div>
            <h1>{storyDetails.title}</h1>
            <p>{storyDetails.story}</p>
        </div>
    )
}

export default StoryDetail

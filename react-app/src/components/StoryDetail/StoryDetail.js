import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './StoryDetail.css'
import { getOneStory, deletingStory } from '../../store/story';
const StoryDetail = ({ storyDetails }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const storyImage = storyDetails.image;
    const currentUser = useSelector(state => state.session.user)

    if (!storyImage) return null;

    // DELETE STORY TO BE IMPLEMENTED LATER

    // const handleDelete = async (e)=> {
    //     e.preventDefault();

    //     await history.push('/');
    //     await dispatch(deleteStory(storyDetails.id))
    // }

    return (
        <div>
            <h6>{storyDetails.user.firstName} {storyDetails.user.lastName}</h6>
            <div className='story-image'>
                <img src={storyDetails.image} alt={storyDetails.title}></img>
            </div>
            <h1>{storyDetails.title}</h1>
            <p>{storyDetails.story}</p>
        </div>
    )
}

export default StoryDetail

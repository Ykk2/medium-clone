import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { edittingStory } from '../../store/story';
import './EditStory.css'
import { getOneStory } from '../../store/story';

// NEED TO IMPORT EDIT STORY THUNK

function EditStory() {
    const sessionUser = useSelector(state => state.session.user)
    const updatedThisStory = useSelector(state => state.story.oneStory)


    const { storyId } = useParams()
    const dispatch = useDispatch();
    const history = useHistory();
    const [story, setStory] = useState(updatedThisStory.story)
    const [title, setTitle] = useState(updatedThisStory.title)
    const [image, setImage] = useState(updatedThisStory.image)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];
        if (!title || title.length > 50) validationErrors.push("Title of your story may not be empty and must be less than 50 characters long.")
        if (!story || story.length > 10000) validationErrors.push("Your story cannot be empty and it must be less than 10000 characters long.")
        if (!image?.match(/\.(gif|png|jpeg|jpg)$/)) validationErrors.push("The photo's URL must end in .gif, .png, .jpeg, or .jpg");
        setErrors(validationErrors)
    }, [story, title, image])


    useEffect(() => {
        dispatch(getOneStory(storyId))
    }, [dispatch, storyId])

    useEffect(() => {
        console.log('THIS IS MY STORY?', updatedThisStory.story)
        setTitle(updatedThisStory.title)
        setStory(updatedThisStory.story)
        setImage(updatedThisStory.image)
    }, [updatedThisStory])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formValues = {
            title, story, image
        }
        const edittedStory = await dispatch(edittingStory(formValues, updatedThisStory.id))
        if (edittedStory) history.push('/profile')
    }

    return (

        <div
            className='allContainer'>
            <form className='story-form' onSubmit={handleSubmit}>

                <label>
                    {/* Title */}
                    <input
                        type="text"
                        placeholder='Title'
                        className='titleInput'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </label>
                <label>
                    {/* Story */}
                    <input
                        type="text"
                        className='storyInput'
                        placeholder="Tell your story..."
                        onChange={(e) => setStory(e.target.value)}
                        required />
                </label>
                <label>
                    {/* Image */}
                    <input
                        type="text"
                        className='imageInput'
                        value={image}
                        placeholder="Image URL for your story"
                        onChange={(e) => setImage(e.target.value)} />
                </label>
                <button type='submit'
                    className='publishBtn'
                    disabled={errors.length > 0}>
                    Publish
                </button>
                <ul className='errors'>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default EditStory

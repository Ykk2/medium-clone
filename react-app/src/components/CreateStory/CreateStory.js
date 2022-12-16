import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { addingStory } from '../../store/story';
// NEED TO IMPORT CREATE STORY THUNK!!

import './CreateStory.css'

const CreateStory = () => {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [story, setStory] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];
        if (!title || title.length > 50) validationErrors.push("Title of your story may not be empty and must be less than 50 characters long.");
        if (!story || story.length > 2000) validationErrors.push("Your story cannot be empty and it must be less than 2000 characters long.");
        if (!image.match(/\.(gif|png|jpeg|jpg)$/)) validationErrors.push("The photo's URL must end in .gif, .png, .jpeg, or .jpg");
        setErrors(validationErrors)
    }, [story, title, image])

    useEffect(() => {
        dispatch(addingStory())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formValues = {
            title, story, image
        }
        const newStory = await dispatch(addingStory(formValues))
        if (newStory) {
            history.push(`/stories/${newStory.id}`)
        }
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
                    <textarea
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

export default CreateStory

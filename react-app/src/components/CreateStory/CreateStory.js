import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

// NEED TO IMPORT CREATE STORY THUNK!!

import './CreateStory.css'

const CreateStory = () => {
    const sessionUser = useSelector(state => state.session.user);
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

    function handleSubmit() {
        const formValues = {
            title, story, image
        }
        history.push('/')
    }

    return (
        <form className='story-form' onSubmit={handleSubmit}>
            <h2>Tell your story</h2>
            <ul className='errors'>
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <label>
                {/* Title */}
                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
            </label>
            <label>
                {/* Story */}
                <input
                    type="text"
                    placeholder="Tell your story..."
                    onChange={(e) => setStory(e.target.value)}
                    required />
            </label>
            <label>
                {/* Image */}
                <input
                    type="text"
                    value={image}
                    placeholder="Image URL for your story"
                    onChange={(e) => setImage(e.target.value)} />
            </label>
            <button type='submit' disabled={errors.length > 0}>
                Publish
            </button>

        </form>
    )
}

export default CreateStory

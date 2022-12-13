import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addingResponse } from "../../store/response";

const CreateResponse = () => {
    const currentUser = useSelector(state => state.session.user)
    const currentStory = useSelector(state => state.story.oneStory)
    const storyResponses = useSelector(state => Object.values(state.response.allResponses))

    const { storyId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [response, setResponse] = useState("")
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validationErrors = [];
        if (!response.length) validationErrors.push("Response must not be empty");
        if (response.length > 255) validationErrors.push("Response must be shorter than 255 characters")
        if (response.length < 2) validationErrors.push("Response must be longer than 2 characters")
        setErrors(validationErrors)
    }, [response])

    // let responded;
    // if (currentUser) storyResponses.find(response => response.userId === currentUser.id) ? responded = true : responded = false
    // console.log("storyResponses state ==== " , storyResponses)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!errors.length) {
            const formValues = {
                response, storyId
            }
            const newResponse = await dispatch(addingResponse(formValues))
            // console.log("LOOK HERE YOU PLEASE ==== ")
            // if (newResponse) {
            //     await history.push(`/stories/${storyId}`)
            // }
        }
    }
    return (
        <div>
            {/* {currentUser && } */}
            <form onSubmit={handleSubmit}>
            <h6>Leave a comment on this story</h6>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div>
                <label>
                    <input
                    type="text"
                    placeholder="Write a comment here..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    required />

                </label>
                <button type="submit">Create Response</button>
            </div>
            </form>
        </div>
    )
}

export default CreateResponse

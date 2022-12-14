import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { editingResponse } from '../../store/response';
import { deletingResponse } from '../../store/response';

function EditResponse({ responseId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const updateThisResponse = useSelector(state => {

        return state.response.allResponses
    })
    const { id } = useParams();
    const [response, setResponse] = useState("");
    const [errors, setErrors] = useState([])



    useEffect(() => {
        const validationErrors = []
        // if (!response.length) validationErrors.push("Response must not be empty");
        // if (response.length > 255) validationErrors.push("Response must be shorter than 255 characters")
        // if (response.length < 2) validationErrors.push("Response must be longer than 2 characters")
        setErrors(validationErrors)
    }, [response, responseId])

    // useEffect(() => {
    //     setResponse(updateThisResponse?.response)
    // }, [updateThisResponse])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!errors.length) {
            const payload = {
                "body": response, responseId
            }

            await dispatch(editingResponse(payload))
            setResponse("")
            // if (isUpdated) {
            //     await history.push(`/stories/${storyId}`)
            // }
        }
    }
    return (
        <div>
            {/* {currentUser && } */}
            <form onSubmit={handleSubmit}>
                {/* <h6>Leave a comment on this story</h6> */}
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
                    <button type="submit">Edit Response</button>
                    <button onClick={async (e) => {
                        e.preventDefault()
                        await dispatch(deletingResponse(responseId))

                    }}>
                        Delete Response
                    </button>

                </div>
            </form>
        </div>
    )

}

export default EditResponse

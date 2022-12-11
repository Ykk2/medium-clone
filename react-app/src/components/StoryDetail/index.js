import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import StoryDetail from "./StoryDetail";

import './StoryDetail.css'

const GetStoryDetail = () => {
    const storyDetails = useSelector(state => state.story.singleStory)
    const [isLoaded, setLoaded] = useState(false)
    const {storyId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSingleStory(storyId)).then(()=> {
            setLoaded(true)
        })
    }, [dispatch, storyId])

    return isLoaded && (
        <div>
            <StoryDetail key={storyDetails.id} storyDetails={storyDetails} />
        </div>
    )
}

export default GetStoryDetail

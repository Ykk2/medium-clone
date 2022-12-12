import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import StoryDetail from "./StoryDetail";
import { getOneStory } from "../../store/story";

import './StoryDetail.css'

const GetStoryDetail = () => {
    const storyDetails = useSelector(state => state.story.oneStory)
    console.log('THIS IS THE STORY DETAILS', storyDetails)
    const [isLoaded, setLoaded] = useState(false)
    const { storyId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneStory(storyId)).then(() => {
            setLoaded(true)
        })
    }, [dispatch, storyId])

    return isLoaded && (
        <div>
            <StoryDetail key={storyDetails.storyId} storyDetails={storyDetails} />
        </div>
    )
}

export default GetStoryDetail

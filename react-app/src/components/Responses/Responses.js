import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './Responses.css'

const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allStories))
    const storyResponseNoObjectValues = useSelector(state = state.response.allStories)
    const currentUser = useSelector(state => state.session.user)

    // useEffect(() => {
    //     // NEED GET ALL RESPONSE THUNK
    //     dispatch(getAllStoryResponses(storyDetails.id))
    // }, [dispatch], storyDetails.id)

    // useEffect(() => {
    //     // NEED ONE STORY RESPONSE THUNK
    //     dispatch(getOneStory(storyDetails.id))
    // }, storyDetails.id, storyResponseNoObjectValues, dispatch)

    return (
        <div>

        </div>
    )
}

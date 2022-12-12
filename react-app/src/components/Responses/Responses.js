import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses } from '../../store/response';
import './Responses.css'

export const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))
    // const storyResponseNoObjectValues = useSelector(state => state..allResponses)
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        // NEED GET ALL RESPONSE THUNK
        dispatch(getResponses(storyDetails.id))
    }, [dispatch, storyDetails.id])

    // useEffect(() => {
    //     // NEED ONE STORY RESPONSE THUNK
    //     dispatch(getOneStory(storyDetails.id))
    // }, storyDetails.id, storyResponseNoObjectValues, dispatch)
    console.log('I HOPE THIS IS RESPOSNES', storyResponse)
    return (
        <div>
            {/* {storyResponse.forEach(story => {
                <p> {story}</p>
            })} */}
            {storyResponse}
        </div>
    )
}

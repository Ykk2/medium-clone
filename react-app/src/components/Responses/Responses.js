import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses, getOneResponse } from '../../store/response';
import { getOneStory } from '../../store/story';
import { deletingResponse, clapResponse } from '../../store/response';
import CreateResponse from '../CreateResponse/CreateResponse';
import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';
import { ResponseLoop } from './ResponsesLoop';

export const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))

    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {

        dispatch(getResponses(storyDetails.id))

    }, [dispatch, storyDetails.id])

    // useEffect(() => {
    //     dispatch(getOneResponse(1))
    // }, [dispatch])
    // const storyId = storyResponse[0].storyId
    // console.log('I NEED THIS ONE', storyId)

    return (
        <div className='biggestResponseContainer'>
            <div className='responsesContainer'>
                {storyResponse?.map((resp) => (
                    <ResponseLoop key={resp.id} resp={resp} storyResponse={storyResponse} storyDetails={storyDetails} />
                ))}
                <div className='createResponse'>
                    <CreateResponse key={storyDetails.id} storyDetails={storyDetails} />
                </div>

            </div>
        </div>
    )
}

// useEffect(() => {
//     dispatch(getOneStory(storyDetails.id))
// }, [storyDetails.id, storyResponseNoObjectValues, dispatch])
// console.log("STORYRESPONSE ======= ", storyResponse)
// const story = useSelector((state) => state.allStories)
// const storyResponseNoObjectValues = useSelector(state => state.response.allResponses)
// console.log("story here ====== ", storyDetails)
// let value;
// let responseMade;
// {
//     storyResponse.find(ele => {
//         console.log('ele ==== ', ele)
//         if (ele?.userId === currentUser?.id) {
//             value = ele.id
//             console.log('currentUser.id === ', currentUser.id)
//             console.log("regular currentUser, no id ===== ", currentUser)
//         }
//     })
// }

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses } from '../../store/response';
import { getOneStory } from '../../store/story';
import { deletingResponse } from '../../store/response';
import CreateResponse from '../CreateResponse/CreateResponse';

import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';

export const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))
    const currentUser = useSelector(state => state.session.user)
    useEffect(() => {

        dispatch(getResponses(storyDetails.id))
    }, [dispatch, storyDetails.id])

    return (
        <div className='biggestResponseContainer'>
            <div className='responsesContainer'>
                {storyResponse?.map((resp) => (
                    <div className='individualResponses'>
                        <div className='responder'>
                            <div className='responderProfile'>
                                <i id='profile-review' className="fas fa-user-circle" />
                            </div>
                            <div className='responderName'>
                                {resp.user?.firstName} {resp.user?.lastName}
                            </div>
                        </div>
                        <div className='responseBody'>
                            {resp.body}
                        </div>
                        <div className='responseActions'>
                            < EditResponse key={storyDetails.id} storyDetails={storyDetails} responseId={resp.id} />
                        </div>
                    </div>
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

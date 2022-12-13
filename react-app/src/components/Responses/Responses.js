import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses } from '../../store/response';
import { deletingResponse } from '../../store/response';
import CreateResponse from '../CreateResponse/CreateResponse';
import './Responses.css'

export const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))
    const storyResponseNoObjectValues = useSelector(state => state.response.allResponses)
    const currentUser = useSelector(state => state.session.user)

    let value;
    let responseMade;
    {
        storyResponse.find(ele => {
            console.log('ele ==== ', ele)
            if (ele?.userId === currentUser?.id) {
                value = ele.id
                console.log('currentUser.id === ', currentUser.id)
                console.log("regular currentUser, no id ===== ", currentUser)
            }
        })
    }
    useEffect(() => {

        dispatch(getResponses(storyDetails.id))
    }, [dispatch, storyDetails.id])

    return (
        <div>
            <ul>
                {storyResponse.map((resp) => (
                    <li>
                        {resp.user.firstName} {resp.user.lastName}
                        <li>
                            {resp.body}
                        </li>
                        {(currentUser && (currentUser.id === resp.user.id) &&
                            <button onclick={async (e) => {
                                e.preventDefault()
                                await dispatch(deletingResponse(value))
                                // await history.push(`/stories/${storyDetails.id}`)
                            }}>Delete Response</button>)}

                    </li>
                ))}
            </ul>
            <div>
                <CreateResponse key={storyDetails.id} storyDetails={storyDetails} />
            </div>
        </div>
    )
}

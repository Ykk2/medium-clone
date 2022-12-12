import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses } from '../../store/response';

import './Responses.css'

export const GetResponsesByStory = ({ storyDetails }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))
    const storyResponseNoObjectValues = useSelector(state => state.response.allResponses)
    const currentUser = useSelector(state => state.session.user)

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
                        <li>
                            {/* ADD CLAP STUFF HERE */}
                        </li>
                    </li>
                ))}
            </ul>

        </div>
    )
}

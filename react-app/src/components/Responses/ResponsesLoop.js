import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getResponses, getOneResponse } from '../../store/response';
import { getOneStory } from '../../store/story';
import { deletingResponse, clapResponse } from '../../store/response';
import CreateResponse from '../CreateResponse/CreateResponse';

import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';


export const ResponseLoop = ({ resp, storyResponse, storyDetails }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const singleResponse = useSelector(state => {
        return state.response.oneResponse
    })

    useEffect(() => {
        dispatch(getOneResponse(resp.storyId, resp.id))

    }, [dispatch, resp.storyId, resp.id])

    const increaseResponseClap = (e) => {
        e.preventDefault()
        dispatch(clapResponse(resp.storyId, resp.id))
        dispatch(getResponses(resp.storyId))
        // .then(() =>
        //  {
        //     dispatch(getOneResponse(resp.storyId, resp.id))
        // })
    }
    return (
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
            <div className='responseClapContainer'>
                <div className='responseTotalClaps'>
                    {resp.totalClaps}
                </div>
                <button
                    onClick={increaseResponseClap}
                    className='responseClapBtn'>
                    <img className='clapEmoji' src={require('./clap.svg').default} alt='svgImage' />

                </button>
            </div>
            <div className='responseActions'>
                < EditResponse key={storyDetails.id} storyDetails={storyDetails} responseId={resp.id} />
            </div>
        </div>

    )




}
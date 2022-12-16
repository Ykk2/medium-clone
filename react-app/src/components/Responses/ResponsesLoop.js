import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getResponses, getOneResponse } from '../../store/response';
import { clapResponse } from '../../store/response';

import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';

export const ResponseLoop = ({ resp, storyDetails }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneResponse(resp.storyId, resp.id))

    }, [dispatch, resp.storyId, resp.id])

    const increaseResponseClap = (e) => {
        e.preventDefault()
        dispatch(clapResponse(resp.storyId, resp.id))
            .then(() => {
                dispatch(getResponses(resp.storyId, resp.id))
            })

        // .then(() =>
        //  {
        //     dispatch(getOneResponse(resp.storyId, resp.id))
        // })
    }
    // const moreThanNoClaps = () => {
    //     return resp.totalClaps > 0
    // }

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



                    {
                        resp.totalClaps > 0 &&
                        resp.totalClaps}
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

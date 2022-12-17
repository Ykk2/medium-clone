import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponses, getOneResponse } from '../../store/response';
import { clapResponse } from '../../store/response';

import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';


export const ResponseLoop = ({ resp, storyDetails }) => {
    const currentUser = useSelector(state => state.session.user)
    const oneResponseSelector = useSelector(state => state.response.oneResponse)
    const [limitClaps, setLimitClaps] = useState(false)
    const dispatch = useDispatch();
    console.log("ONESELECTOR AND LIMIT CLAPS ========= ", oneResponseSelector, limitClaps)

    const clapChecker = () => {

        console.log("LIMIT REACHED ==============", oneResponseSelector.totalClaps)
        if (oneResponseSelector.totalClaps >= 49 && currentUser) {
            return setLimitClaps(true)
        }

    }

    useEffect(() => {
        dispatch(getOneResponse(resp.storyId, resp.id))


    }, [dispatch, resp])

    const increaseResponseClap = (e) => {
        e.preventDefault()
        dispatch(clapResponse(resp.storyId, resp.id, resp.totalClaps))
            .then(() => {
                dispatch(getResponses(resp.storyId, resp.id))
                    .then(() => {
                        dispatch(getOneResponse(resp.storyId, resp.id))
                            .then(() => {
                                clapChecker();
                            })
                    })
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
                        resp.totalClaps >= 0 &&
                        resp.totalClaps}
                </div>
                {!limitClaps ?
                    <button
                        onClick={increaseResponseClap}
                        className='responseClapBtn'>
                        <img className={'clapEmoji'} src={require('./clap.svg').default} alt='svgImage' />
                    </button>
                    :
                    <button>
                        <i className="fa-solid fa-hand" />
                    </button>
                }

            </div>
            {
                currentUser?.id === resp.userId &&
                <div className='responseActions'>
                    < EditResponse key={storyDetails.id} storyDetails={storyDetails} responseId={resp.id} />
                </div>}
        </div>

    )




}

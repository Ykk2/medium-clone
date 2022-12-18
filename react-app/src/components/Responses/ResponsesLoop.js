import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponses, getOneResponse } from '../../store/response';
import { clapResponse } from '../../store/response';

import './Responses.css'
import EditResponse from '../EditResponse/EditResponse';


export const ResponseLoop = ({ resp, storyDetails }) => {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const currentResponse = useSelector(state => state.response.oneResponse)


    const [clapLimit, setClapLimit] = useState()



    const clapCheck = () => {
        if (currentResponse.totalClaps >= 10) {
            console.log("inside clapCheck", currentResponse.totalClaps, "clapLimit", clapLimit)
            return setClapLimit(true)
        }
    }

    useEffect(() => {
         dispatch(getOneResponse(resp.storyId, resp.id))
        .then(async() => {
            await dispatch(getResponses(resp.storyId))
        })
        .then(async(res) => {
            // console.log("is this happening? number 1", res.totalUserClaps)
            // if (res.totalUserClaps >= 10) {
            //     console.log("is this happening? number 2", res.totalUserClaps)
            //     setClapLimit(true)
            // }
        })
    }, [dispatch, resp.storyId, resp.id])


    const increaseResponseClap = async (e) => {
        e.preventDefault()
        await dispatch(clapResponse(resp.storyId, resp.id))
            .then(async () => {
                await dispatch(getResponses(resp.storyId))
            })
            .then(async () => {
                console.log("inside async")
                await dispatch(getOneResponse(resp.storyId, resp.id))
                console.log("inside async currentResponse", currentResponse)
                await clapCheck()
            })
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
                    {resp.totalClaps >= 0 && resp.totalClaps}
                </div>
                {clapLimit ?

                    <h1>We're done</h1>

                    :

                    <button
                        onClick={increaseResponseClap}
                        className='responseClapBtn'>
                        <img className='clapEmoji' src={require('./clap.svg').default} alt='svgImage' />
                    </button>

                }
            </div>
            {
                currentUser?.id === resp.userId &&

                <div className='responseActions'>
                    < EditResponse key={storyDetails.id} storyDetails={storyDetails} responseId={resp.id} />
                </div>
            }
        </div>

    )




}

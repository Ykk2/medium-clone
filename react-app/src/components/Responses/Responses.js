import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponses } from '../../store/response';
import CreateResponse from '../CreateResponse/CreateResponse';
import './Responses.css'
import { ResponseLoop } from './ResponsesLoop';


export const GetResponsesByStory = ({ storyDetails }) => {
    const dispatch = useDispatch();
    const storyResponse = useSelector(state => Object.values(state.response.allResponses))

    useEffect(() => {

        dispatch(getResponses(storyDetails?.id))

    }, [dispatch, storyDetails?.id])

    return storyResponse && (
        <div className='biggestResponseContainer'>
            <div className='responsesContainer'>
                <div className='createResponse'>
                    <CreateResponse key={storyDetails.id} storyDetails={storyDetails} />
                </div>

                {storyResponse?.map((resp) => (
                    <ResponseLoop key={resp.id} resp={resp} storyResponse={storyResponse} storyDetails={storyDetails} />
                ))}

            </div>
        </div>
    )
}

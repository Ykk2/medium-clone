import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"
import { gettingFollows, addingFollow, deletingFollow } from '../../store/follow';
import FollowingButton from './FollowingButton'

function Following({ setShowModal, userId }) {

    const dispatch = useDispatch()
    const followers = useSelector(state => state.follow.Followers)

    const followersList = Object.values(followers)


    useEffect(() => {
        dispatch(gettingFollows(userId))
    }, [])

    return (
        <>
        {followersList.map(follower => (
            <div>
                <p>{follower.firstName} {follower.lastName}</p>
                <FollowingButton followerId={follower.id}/>
            </div>
        ))}
        </>
    )
}


export default Following

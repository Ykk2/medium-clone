import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"
import { gettingFollowings, addingFollow, deletingFollow } from '../../store/follow';
import FollowingButton from './FollowingButton'

function Following({ setShowModal, userId }) {

    const dispatch = useDispatch()
    const followers = useSelector(state => state.follow.Followers)
    const sessionUser = useSelector(state => state.session.user)

    const followersList = Object.values(followers)


    useEffect(() => {
        dispatch(gettingFollowings(sessionUser.id))
    }, [dispatch])

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

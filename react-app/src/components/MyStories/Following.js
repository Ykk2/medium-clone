import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletingFollow, gettingFollowings } from '../../store/follow';


function Following() {

    const dispatch = useDispatch()
    const followers = useSelector(state => state.follow.Followers)
    const sessionUser = useSelector(state => state.session.user)
    const followersList = Object.values(followers)


    useEffect(() => {
        dispatch(gettingFollowings(sessionUser.id))
    }, [dispatch])

    const handleRemoveFollowClick = async (e, followerId) => {
        e.preventDefault()
        await dispatch(deletingFollow(followerId, followerId))
        await dispatch(gettingFollowings(sessionUser.id))
    }

    return (
        <div className='following-modal'>
            {followersList.map(follower => (
                <div className="single-modal">
                    <div className="following-name">
                        <i className="fas fa-user-circle" /> &nbsp;&nbsp;{follower.firstName} {follower.lastName}</div>
                    <div className='follow-unfollow-buttons'>
                        <button className="following-unfollow-button" onClick={(e) => handleRemoveFollowClick(e, follower.id)}>Unfollow</button>&nbsp;&nbsp;
                        <i style={{ fontSize: '20px' }} className="fa-solid fa-user-minus" />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Following

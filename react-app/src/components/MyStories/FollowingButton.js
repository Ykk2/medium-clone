import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gettingFollows, addingFollow, deletingFollow } from '../../store/follow';


function FollowingButton({followerId}) {

    const currentUser = useSelector(state => state.session.user)

    const dispatch = useDispatch()

    const [follow, setFollowing] = useState(true)

    const handleFollowClick = (e) => {
        e.preventDefault()
        dispatch(addingFollow(followerId))
        setFollowing(true)
    }

    const handleRemoveFollowClick = (e) => {
        e.preventDefault()
        dispatch(deletingFollow(followerId, followerId))
        setFollowing(false)
    }

    return (
        <>
            {follow ?
            <button onClick={handleRemoveFollowClick}>Unfollow</button>
            :
            <button onClick={handleFollowClick}>Follow</button>
            }
        </>
    )
}

export default FollowingButton

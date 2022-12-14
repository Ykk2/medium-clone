import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { addingFollow, deletingFollow, gettingFollows } from "../../store/follow";


const Follows = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.session.user)

    console.log("currentUser", currentUser)

    const handleAddClick = async (e) => {
        e.preventDefault()
        await dispatch(addingFollow(8))
    }

    const handleDeleteClick = async (e) => {
        e.preventDefault()
        await dispatch(deletingFollow(7))
    }

    const handleLoadClick = async (e) => {
        e.preventDefault()
        await dispatch(gettingFollows(currentUser?.id))
    }

    return (
        <>
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleLoadClick}>Load</button>
        </>
    )

}

export default Follows

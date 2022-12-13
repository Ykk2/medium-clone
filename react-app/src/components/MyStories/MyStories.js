import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { deletingStory } from "../../store/story";
import { getMyStories } from "../../store/story";
import './MyStories.css'
const ShowMyStories = () => {

    const getStories = useSelector(state => {
        return Object.values(state.story.allStories)
    })
    // const currentUser = useSelector(state => state.session.user)
    console.log("getStories", getStories)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    console.log("Current User from Component", currentUser)
    useEffect(() => {
        dispatch(getMyStories(currentUser?.id))
    }, [dispatch, currentUser])


    // if (!getStories.length) return null;
    return (
        <div className="myStoriesContainer">
            <div className="header">Your Stories</div>
            {getStories?.map(story => (
                < div className="story-image" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <h1>{story?.User.firstName} {story?.User.lastName}</h1>
                        <h3>{story?.Title}</h3>
                        <p>{story?.Story}</p>
                        <img src={story.image} alt={story.name}></img>
                    </NavLink>
                    <button
                        onClick={async (e) => {
                            e.preventDefault()
                            await dispatch(deletingStory(story.storyId))
                        }}

                    >DELETE THIS STORY</button>
                </div>
            ))
            }
        </div >
    )
}

export default ShowMyStories

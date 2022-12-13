import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { deletingStory, edittingStory } from "../../store/story";
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
        <div className="allMyContainer">
            <div className="myStoriesContainer">
                <div className="headerContainer">
                    <div className="header">Your Stories</div>
                    <button className="addStoryBtn">
                        <NavLink to={`/stories/new`}>
                            Write a Story
                        </NavLink>
                    </button>

                </div>
                {getStories?.map(story => (
                    < div className="story-card" >
                        <NavLink to={`/stories/${story.storyId}`}>
                            <div className="storyTitle">{story?.Title}</div>
                            <div className="storyBody">{story?.Story}</div>
                        </NavLink>
                        <button
                            className="deleteBtn"
                            onClick={async (e) => {
                                e.preventDefault()
                                await dispatch(deletingStory(story.storyId))
                            }}

                        >DELETE THIS STORY</button>
                        <button
                            className="editBtn"
                            onClick={async (e) => {
                                e.preventDefault()
                                await dispatch(edittingStory(story.storyId))
                            }}>
                            EDIT THIS STORY
                        </button>
                    </div>
                ))
                }
            </div ></div>
    )
}

export default ShowMyStories

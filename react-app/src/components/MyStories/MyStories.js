import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllStories } from "../../store/story";
import { NavLink } from "react-router-dom";
import { deletingStory } from "../../store/story";

const ShowMyStories = () => {
    const getStories = useSelector(state => Object.values(state.story.allStories))
    // const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])
    if (!getStories.length) return null;
    return (
        <div>

            {getStories.map(story => (
                < div className="story-image" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <h6>{story.User.firstName} {story.User.lastName}</h6>
                        <h3>{story.title}</h3>
                        <p>{story.story}</p>
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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { deletingStory } from "../../store/story";
import { getMyStories } from "../../store/story";

const ShowMyStories = () => {
    const getStories = useSelector(state => {
        console.log('THIS IS MY STATE YOOOOOO', state)
        return Object.values(state.story.allStories)
    })
    // const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getMyStories(currentUser.id))
    }, [dispatch])
    console.log('THIS IS MY CURRENT USER', getStories)

    // if (!getStories.length) return null;
    return (
        <div>

            {getStories.map(story => (
                < div className="story-image" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <h6>{story.Story.User.firstName} {story.Story.User.lastName}</h6>
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

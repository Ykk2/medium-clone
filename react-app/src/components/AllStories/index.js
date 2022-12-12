import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllStories } from "../../store/story";
import { NavLink } from "react-router-dom";

const ShowAllStories = () => {
    const getStories = useSelector(state => Object.values(state.story.allStories))
    // const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    if (!getStories.length) return null;
    return (
        <div>
            <NavLink to={`/stories/new`}>
                <button>CREATE A STORY</button>
            </NavLink>
            {getStories.map(story => (
                < div className="story-image" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <h6>{story.User.firstName} {story.User.lastName}</h6>
                        <h3>{story.title}</h3>
                        <p>{story.story}</p>
                        <img src={story.image} alt={story.name}></img>
                    </NavLink>
                </div>
                // <AllStories key={story.id} story={story} />
            ))
            }
        </div >
    )
}

export default ShowAllStories

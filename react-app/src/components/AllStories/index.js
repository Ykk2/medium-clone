import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


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
            {getStories.map(story => (
                <div className="story-image">
                    <NavLink to={`/stories/${story.id}`}>
                        <h6>{story.user.firstName} {story.user.lastName}</h6>
                        <h3>{story.title}</h3>
                        <p>{story.story}</p>
                        <img src={story.image} alt={story.name}></img>
                    </NavLink>
                </div>
                // <AllStories key={story.id} story={story} />
            ))}
        </div>
    )
}

export default ShowAllStories

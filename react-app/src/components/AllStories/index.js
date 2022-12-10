import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


const ShowAllStories = () => {
    const getStories = useSelector(state => Object.values(state.story.allStories))
    // const currentUser = useSelector(state => state.session.user) 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllStories())
    }, [dispatch])

    if (!getStories.length) return null;
    return (
        <div>
            {getStories.map(story=> (
                <AllStories key={story.id} story={story} />
            ))}
        </div>
    )
}

export default ShowAllStories

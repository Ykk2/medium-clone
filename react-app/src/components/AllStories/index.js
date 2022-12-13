import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllStories } from "../../store/story";
import { NavLink } from "react-router-dom";
import './AllStories.css'

const ShowAllStories = () => {
    const getStories = useSelector(state => Object.values(state.story.allStories))
    // const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStories())
    }, [dispatch])

    if (!getStories.length) return null;
    console.log('WEINERS', getStories[0].Title)
    return (
        <div
            className="allStoriesContainer">
            <NavLink to={`/stories/new`}>
                <button
                    className="createStoryBtn">CREATE A STORY</button>
            </NavLink>
            {getStories.map(story => (
                < div className="storyCard" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <div className="mainContain">
                            <div className="left">
                                <div className="authorName">
                                    <div
                                        className="first_last">{story.User.firstName} {story.User.lastName}
                                    </div>
                                </div>
                                <div className="storyTitle">
                                    <div className="title">{story.Title}</div>
                                </div>
                                <div className="storyBody">
                                    <div className="body">{story.story}</div>
                                </div></div>
                            <div className="right">
                                <img src={story.Image} alt={story.name} className='storyImage'></img></div></div>
                    </NavLink>
                </div>
                // <AllStories key={story.id} story={story} />
            ))
            }
        </div >
    )
}

export default ShowAllStories

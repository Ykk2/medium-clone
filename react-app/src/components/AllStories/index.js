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

    const dateConverter = (date) => {
        const newDate = new Date(date)
        return `${newDate.toLocaleString('en-US', { month: 'short' })} ${newDate.getDate()}`
    }

    function getRandomInt(max) {
        return Math.ceil(Math.random() * max);
    }

    if (!getStories.length) return null;
    return (
        <div className="allStoriesContainer">
            <NavLink to={`/stories/new`}>
                <button
                    className="createStoryBtn"><i className="fa-regular fa-pen-to-square" />&nbsp;&nbsp;Write</button>
            </NavLink>
            {getStories.map(story => (
            <div className="allStoriesWrapper">
                <NavLink to={`/stories/${story.storyId}`}>
                    <div className="storyCard" key={story.storyId} >
                        <div className="left">
                            <p className="userinfo"><i id='profile-review' className="fas fa-user-circle" /> &nbsp; {story.User.firstName} {story.User.lastName}</p>
                            <p className="title">{story.Title}</p>
                            <p className="storytext">{story?.story?.slice(0, 110)}...</p>
                            <p className="storydate">{dateConverter(story.createdAt)} · {getRandomInt(21)} min read &nbsp;
                                <span id="star-emoji">✨</span>
                            </p>
                        </div>
                        <div className="right">
                            <img src={story.Image} alt={story.name} className='storyImage'/>
                        </div>
                    </div>
                </NavLink>
            </div>

            ))
            }
        </div >
    )
}

export default ShowAllStories

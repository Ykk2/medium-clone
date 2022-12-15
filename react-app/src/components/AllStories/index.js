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
        <div
            className="allStoriesContainer">
            <NavLink to={`/stories/new`}>
                <button
                    className="createStoryBtn"><i class="fa-regular fa-pen-to-square" />&nbsp;&nbsp;Write</button>
            </NavLink>
            {getStories.map(story => (
                < div className="storyCard" >
                    <NavLink to={`/stories/${story.storyId}`}>
                        <div className="mainContain">
                            <div className="left">
                                <div className="authorName">
                                    <p className="userinfo"><i id='profile-review' className="fas fa-user-circle" /> &nbsp; {story.User.firstName} {story.User.lastName}</p>
                                </div>
                                <div className="storyTitle">
                                    <div className="title">{story.Title}</div>
                                </div>
                                <div className="storyBody">
                                    <div className="body">{story.story}</div>
                                </div>
                                <p className="storydate">{dateConverter(story.createdAt)} · {getRandomInt(21)} min read &nbsp;
                                    <span id="star-emoji">✨</span>
                                </p>
                            </div>
                            <div className="right">
                                <img src={story.Image} alt={story.name} className='storyImage'>
                                </img>
                            </div>
                        </div>
                    </NavLink>
                </div>
                // <AllStories key={story.id} story={story} />
            ))
            }
        </div >
    )
}

export default ShowAllStories

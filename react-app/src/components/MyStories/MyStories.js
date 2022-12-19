import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal'
import { NavLink } from "react-router-dom";
import { deletingStory } from "../../store/story";
import { getMyStories, getFollowingStories } from "../../store/story";
import Following from './Following'
import './MyStories.css'


const ShowMyStories = () => {


    const [showModal, setShowModal] = useState(false)
    const [showFeed, setShowFeed] = useState()


    const getStories = useSelector(state => {
        return Object.values(state.story.allStories)
    })

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        if (showFeed) {
            dispatch(getFollowingStories(currentUser?.id))
        }
        else {
            dispatch(getMyStories(currentUser?.id))
        }
    }, [dispatch, currentUser, showFeed])


    const handleShowFeedClick = (e) => {
        e.preventDefault()
        setShowFeed(true)
    }

    const handleShowMyStoriesClick = (e) => {
        e.preventDefault()
        setShowFeed(false)
    }

    // if (!getStories.length) return null;
    return (
        <div className="allMyContainer">
            <div className="myStoriesContainer">
                <div className="headerContainer">
                    <div className="header">{ !showFeed? "Your Stories" : `${"Your Feed"}` }</div>

                    <button className="addStoryBtn">
                        <NavLink to={`/stories/new`} className="write-a-story">
                            Write a Story
                        </NavLink>
                    </button>
                    <button className="following-button" onClick={() => setShowModal(true)}><i className="fa-solid fa-users" /> &nbsp;Following</button>
                </div>
                <div>
                    <button onClick={handleShowMyStoriesClick}>Your Stories</button>
                    <button onClick={handleShowFeedClick}>Feed</button>
                </div>
                <div className="divider">
                    {getStories?.map(story => (
                        <div className="story-card-mystories" >
                            <div className="story-stuff-mystories">
                                <NavLink className="mystories-test" to={`/stories/${story.storyId}`}>
                                    <p className="userinfo-mystories"><i id='profile-review' className="fas fa-user-circle" /> {story.User?.firstName} {story.User?.lastName}</p>
                                    <p className="storyTitle-mystories">{story?.Title}</p>
                                    <p className="storyBody-mystories">{story?.Story}</p>
                                </NavLink>
                            </div>
                            {
                                !showFeed?
                                    <div className="button-container">
                                        <button className="deleteBtn"
                                            onClick={async (e) => {
                                                e.preventDefault()
                                                await dispatch(deletingStory(story.storyId))
                                            }}

                                        >Delete Story
                                        </button>
                                        <NavLink to={`/stories/${story.storyId}/edit`}>
                                            <button className="editBtn">
                                                Edit Story
                                            </button>
                                        </NavLink>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    ))}
                </div>
            </div >
            {showModal &&
                <Modal onClose={() => setShowModal(false)}>
                    <Following userId={currentUser.id} />
                </Modal>
            }
        </div>
    )
}

export default ShowMyStories

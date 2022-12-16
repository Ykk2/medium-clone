import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal'
import { NavLink } from "react-router-dom";
import { deletingStory, edittingStory } from "../../store/story";
import { getMyStories } from "../../store/story";
import { gettingFollows, addingFollow, deletingFollow } from '../../store/follow';
import Following from './Following'
import './MyStories.css'

const ShowMyStories = () => {


    const [showModal, setShowModal] = useState(false)

    const getStories = useSelector(state => {
        return Object.values(state.story.allStories)
    })

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
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
                    <button className="following-button" onClick={() => setShowModal(true)}><i class="fa-solid fa-users" /> &nbsp;Following</button>
                </div>
                {getStories?.map(story => (
                    < div className="story-card" >
                        <NavLink to={`/stories/${story.storyId}`}>
                            <p className="userinfo"><i id='profile-review' className="fas fa-user-circle" /> &nbsp; {story.User?.firstName} {story.User?.lastName}</p>
                            <div className="storyTitle">{story?.Title}</div>
                            <div className="storyBody">{story?.Story}</div>
                        </NavLink>
                        <button
                            className="deleteBtn"
                            onClick={async (e) => {
                                e.preventDefault()
                                await dispatch(deletingStory(story.storyId))
                            }}

                        >Delete Story</button>
                        <NavLink to={`/stories/${story.storyId}/edit`}>
                            <button className="editBtn">
                                Edit Story
                            </button></NavLink>
                    </div>
                ))
                }
            </div >
            {showModal &&
                <Modal onClose={() => setShowModal(false)}>

                    <Following setShowModal={setShowModal} userId={currentUser.id} />

                </Modal>
            }
        </div>
    )
}

export default ShowMyStories

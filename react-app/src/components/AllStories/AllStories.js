import { NavLink } from "react-router-dom"
import './AllStories.css'

const AllStories = ({ story }) => {

    return (
        <div>
            <div className="story-image">
                <NavLink to={`/stories/${story.id}`}>
                    <h6>{story.user.firstName} {story.user.lastName}</h6>
                    <h3>{story.title}</h3>
                    <p>{story.story}</p>
                    <img src={story.image} alt={story.name}></img>
                </NavLink>
            </div>
        </div>
    )
}


export default AllStories

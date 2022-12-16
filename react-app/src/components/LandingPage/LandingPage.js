import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStories } from "../../store/story"
import { NavLink } from "react-router-dom"
import trendingImage from './trending resize.png'


import './LandingPage.css'


function LandingPage() {

    const allStories = useSelector(state => Object.values(state.story.allStories))
    const trendingStories = allStories.slice(1, 7)
    const remainingStories = allStories.slice(6)
    const dispatch = useDispatch()

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

    return (
        <>
            <div className="banner-wrapper">
                <div className="banner">
                    <p id='first'>Stay curious.</p>
                    <p id='second'>Discover stories, thinking, and expertise</p>
                    <p id='third'>from writers on any topic.</p>
                    <button id="start-reading">Start reading</button>
                </div>
                <img alt="Banner" className="banner-animation" src={require('./chrome-capture-2022-11-12.gif').default} />
            </div>
            <div className="trending-stories-wrapper">
                <p className="trending-on-hard-text">
                    <img alt="Trending" className="trending-on-hard" src={trendingImage}
                    />
                    &nbsp; TRENDING ON HARD
                </p>
                <div className="trending-stories">
                    {trendingStories.map(story => (
                        <div className="trending-story-wrapper">
                            <div className="trending-number">0{trendingStories.indexOf(story) + 1}</div>
                            <div className="trending-story" key={story.id}>
                                <NavLink to={`/stories/${story.storyId}`}>
                                    <p className="userinfo"><i id='profile-review' className="fas fa-user-circle" /> &nbsp; {story.User.firstName} {story.User.lastName}</p>
                                    <p className="storytitle">{story.Title}</p>
                                    <p className="storydate">{dateConverter(story.createdAt)} · {getRandomInt(20)} min read &nbsp;
                                        <span id="star-emoji">✨</span>
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="remaining-stories-wrapper">
                {remainingStories.map(story => (

                    <div className="remaining-story" key={story.id}>
                        <NavLink to={`/stories/${story.storyId}`}>
                            <div className="remaining-stories-divider">
                                <div id="remaining-stories-left">
                                    <p className="userinfo"><i id='profile-review' className="fas fa-user-circle" /> &nbsp; {story.User.firstName} {story.User.lastName}</p>
                                    <p className="storytitle">{story.Title}</p>
                                    <p className="storytext">{story.story.slice(0, 110)} ...</p>
                                    <p className="storydate">{dateConverter(story.createdAt)} · {getRandomInt(21)} min read &nbsp;
                                        <span id="star-emoji">✨</span>
                                    </p>
                                </div>
                                <div className="remaining-stories-right">
                                    <img alt="Story-Img" src={story.Image} />
                                </div>
                            </div>
                        </NavLink>
                    </div>

                ))}
            </div>
        </>
    )
}


export default LandingPage

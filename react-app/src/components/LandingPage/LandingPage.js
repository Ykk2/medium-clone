import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStories } from "../../store/story"
import { NavLink } from "react-router-dom"

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
        return `${newDate.toLocaleString('en-US', {month: 'short'})} ${newDate.getDate()}`
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
                <img className="banner-animation" src={require('./chrome-capture-2022-11-12.gif').default}/>
            </div>
            <div className="trending-stories-wrapper">
                <div className="trending-stories">
                    {trendingStories.map(story => (
                        <div className="trending-story-wrapper">
                            <div className="trending-number">0{trendingStories.indexOf(story) + 1}</div>
                            <div className="trending-story" key={story.id}>
                                <NavLink to={`/stories/${story.storyId}`}>
                                        <p className="userinfo">{story.User.firstName} {story.User.lastName}</p>
                                        <p className="storytitle">{story.Title}</p>
                                        <p className="storydate">{dateConverter(story.createdAt)}</p>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="remaining-stories-wrapper">
                {remainingStories.map(story => (
                    <div className="remaining-story-wrapper">
                        <div className="remaining-story" key={story.id}>
                            <NavLink to={`/stories/${story.storyId}`}>
                                <div className="remaining-stories-divider">
                                    <div id="remaining-stories-left">
                                        <p className="userinfo">{story.User.firstName} {story.User.lastName}</p>
                                        <p className="storytitle">{story.Title}</p>
                                        <p className="storydate">{dateConverter(story.createdAt)}</p>
                                    </div>
                                    <div className="remaining-stories-right">
                                        <img src={story.Image}/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                    <h1>hello</h1>
            </div>
        </>
    )
}


export default LandingPage

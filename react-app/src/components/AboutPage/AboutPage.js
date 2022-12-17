
import './AboutPage.css'





const AboutPage = () => {
    return (
        <div className="aboutPageContainer">
            <div className='aboutPageHeader'>
                Our Team
            </div>
            <div className='teamIndividuals'>
                <div className='playerCard'>
                    <img className="indiImage" src={require('./andrew.png').default} alt='svgImage' />
                    <div className='nameContainer'>
                        <div className='indiName'>Andrew Kim</div>
                    </div>
                    <div className='socialLinks'>
                        <a href='https://github.com/adotk24' target="_blank" class='aboutPage'>
                            <img className='gitHub' src={require('./github-mark.png').default} alt='github' />
                        </a>
                        <a href='https://linkedin.com/in/andrewkimcode' target="_blank" class='aboutPage'>
                            <img className='linkedin' src={require('./linkedin.png').default} alt='linkedin' />
                        </a>
                    </div>
                </div>
                <div className='playerCard'>
                    <img className="indiImage" src={require('./richard.png').default} alt='svgImage' />
                    <div className='nameContainer'>
                        <div className='indiName'>Richard Kwon</div>
                    </div>
                    <div className='socialLinks'>
                        <a href='https://github.com/Ykk2' target="_blank" class='aboutPage'>
                            <img className='gitHub' src={require('./github-mark.png').default} alt='github' />
                        </a>
                        <a href='https://www.linkedin.com/in/richardkwon2/' target="_blank" class='aboutPage'>
                            <img className='linkedin' src={require('./linkedin.png').default} alt='linkedin' />
                        </a>
                    </div>
                </div>
                <div className='playerCard'>
                    <img className="indiImage" src={require('./david.png').default} alt='svgImage' />
                    <div className='nameContainer'>
                        <div className='indiName'>David Liaw</div>
                    </div>
                    <div className='socialLinks'>
                        <a href='https://github.com/DLiaw' target="_blank" class='aboutPage'>
                            <img className='gitHub' src={require('./github-mark.png').default} alt='github' />
                        </a>
                        <a href='https://www.linkedin.com/in/david-liaw-55a510251/' target="_blank" class='aboutPage'>
                            <img className='linkedin' src={require('./linkedin.png').default} alt='linkedin' />
                        </a>
                    </div>
                </div>
                <div className='playerCard'>
                    <img className="indiImage" src={require('./jeff.png').default} alt='svgImage' />
                    <div className='nameContainer'>
                        <div className='indiName'>Jeff Eydt</div>
                    </div>
                    <div className='socialLinks'>
                        <a href='https://github.com/JEydt23' target="_blank" class='aboutPage'>
                            <img className='gitHub' src={require('./github-mark.png').default} alt='github' />
                        </a>
                        <a href='https://www.linkedin.com/in/jeff-eydt-a5b86b9b/' target="_blank" class='aboutPage'>
                            <img className='linkedin' src={require('./linkedin.png').default} alt='linkedin' />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPage

import React,{ Fragment } from 'react'
import './About.css'


const About = () => {
    return (
        <Fragment>
            <div className="about">
                <h1 style={{ textDecoration:'underline' }}>About the App</h1>
                <p>A Web-App to find the github Users</p>
                <p>Version:1.0.0 <i className="fas fa-heart" style={{color:'red'}}></i></p>
                <p>Liked it? Click on the icon <a href="https://github.com/skm2000">
                <i className="fab fa-github" style={{ color:'blue' }}></i>
                </a> and give a <i className="fas fa-star" style={{ color:'orange' }}></i>.</p>
            </div>
        </Fragment>
    )
}

export default About
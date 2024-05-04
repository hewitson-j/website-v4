import './About.css'
import profilePic from '../images/Capitol Profile Pic.jpg'


export default function About(){
    return <div className='about'>
        <h1>Nice to Meet You!</h1>
        <div className='about-intro'>
            <p>It's really nice to meet you. My name is Jacob Hewitson and I am a software engineer working with <a href='http://www.familysearch.org'>FamilySearch</a>. Here you can get to know a little more about me!</p>
            <img src={profilePic} id='about-profile-pic' alt='My Profile Pic' />
        </div>
        <h2>School</h2>
            <p></p>
        <h2>Work</h2>

    </div>
}
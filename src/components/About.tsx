import './About.css'
import profilePic from '../images/Capitol Profile Pic.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Copyright from './Copyright'


export default function About(){
    const navigate = useNavigate()

    return <div className='about'>
        <h1>Nice to Meet You!</h1>
        <div className='about-intro'>
            <img src={profilePic} id='about-profile-pic' alt='Jacob Hewitson Profile Pic' title='Profile Pic' />
            <p>It's really nice to meet you. My name is Jacob Hewitson and I am a software engineer working with <a href='http://www.familysearch.org'>FamilySearch</a>. Here you can get to know a little more about me!</p>
        </div>
        <section>
            <h2>School</h2>
            <p className='paragraphs'>
                I graduated with my Bachelor of Computer Science from Western Governors Univerisity in November, 2022. Below are my credentials and certifications:
            </p>
            <ul className='paragraphs'>
                <li>BS of Science, Computer Science from Western Governors University (Graduated Nov. 2022)</li>
                <li>CompTIA Project+ Certification (issued Jun. 2022)</li>
                <li>ITIL v4 Foundations Certificate (issued Jun. 2022)</li>
            </ul>
        </section>
        <section>
            <h2>Work</h2>
            <p className='paragraphs'>Currently I am working full-time as a web development intern for <a href='http://www.familysearch.org'>FamilySearch</a>. I also manage web applications and websites for several organizations and clients such as <a href='http://leapsandboundsprek.com'>Leaps and Bounds Preschool, Colorado Springs</a> and the <a href='http://minegrinder.com'>Mine Grinder</a> book series.</p>
        </section>
        <section>
            <h2>Reach out!</h2>
            <p className='paragraphs'>I'm always looking to share what I'm working on. Feel free to reach out by clicking this link <Link to={'/contact'}>here</Link> or by clicking the button below.</p>
            <button onClick={() => navigate('/contact')}
            className='buttons'>Contact Me!</button>
        </section>
        <Copyright margin='1rem auto'/>
    </div>
}
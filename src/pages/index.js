import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaWordpressSimple, FaExternalLinkAlt, FaGithub, FaEnvelope, FaArrowCircleRight } from 'react-icons/fa'
import YouTube  from 'react-youtube'
import Layout from '../components/layout'
import '../components/index.css'
import About from '../components/about'
import SkillsList from '../components/skillslist'

const skillsListOne = ['Gatsby', 'JAMStack', 'WordPress','PHP', 'MySQL']
const skillsListTwo = ['ES6','React', 'Vue', 'Angular', 'jQuery']
const skillsListThree = ['CSS-in-JS', 'Gulp', 'CSS3','Sass','HTML5']

class IndexPage extends Component {

  constructor(props) {
    super(props)
    this.state = {width: props.width}
  }

  componentDidMount(){
    this.setState({width: window.innerWidth})
  }

  render(){
    const videoOpts = () => {
      const options = this.state.width < 1360 ? {
        width: '320',
        height: '195'
      } : {
        width: '640',
        height: '390'
      };
      return options
    }

    return(
    <Layout useH1={true}>
      <section className="contact" id="contact-alex-gustafson" style={{
        backgroundColor: '#BFC192',
        padding: '4em 0 2.4em'
      }}>
        <ul className="contact__list container">
          <li className="contact__list-item"><a href="https://alexjgustafson.blog" title="Vist my blog at alexjgustafson.blog"><FaWordpressSimple style={{fontSize: `6em`}} /><br/><span>Blog <FaExternalLinkAlt style={{fontSize: `0.8em`}}/></span></a></li>
          <li className="contact__list-item"><a href="https://github.com/alexjgustafson" title="Visit my GitHub profile: alexjgustafson"><FaGithub style={{fontSize: `6em`}}/><br/><span>GitHub <FaExternalLinkAlt style={{fontSize: `0.8em`}}/></span></a></li>
          <li className="contact__list-item"><Link to="/contact" title="Contact"><FaEnvelope style={{fontSize: `6em`}}/><br/><span>Contact</span></Link></li>
        </ul>
      </section>
      <About />
      <section className="skills" style={{backgroundColor:'#5A5F69', color:'#fff', fontSize: '1.6rem', padding:'3em 0 1.6em'}}>
        <div className="container">
          <h2 className="skills__headline" style={{fontSize: `1.3em`, marginBottom:'1.3em'}}>Proficiencies</h2>
          <div className="skills__lists-wrapper">
            <SkillsList list={skillsListOne} />
            <SkillsList list={skillsListTwo} />
            <SkillsList list={skillsListThree} />
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container portfolio__content">
          <h2>Portfolio</h2>
          <p>I've helped thousands of WordPress users (that's not hyperbole) and coded on hundreds of websites. Any portfolio I could list here would be about as fun as a resume. You don't have time for resumes. There's stuff to get done.</p>
          <p>Send me a quick message with what you're working on. I'll package up some examples of similar work I've done and we can get the ball rolling on your next project.</p>
          <Link to="/contact">Sounds Like a Plan! <FaArrowCircleRight /></Link>
        </div>
        <div className="container portfolio__video-wrapper">
          <YouTube 
            videoId='Mlj0JoT4fng'
            opts={videoOpts()}
          />
          <p>I'm making an introductory video to just say, "Hi." For now enjoy this lovely shark video.</p>
        </div>
      </section>
    </Layout>
    )
  }
}

export default IndexPage

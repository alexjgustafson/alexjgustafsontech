import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaWordpressSimple, FaExternalLinkAlt, FaGithub, FaEnvelope } from 'react-icons/fa'
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
      <section className="testimonial">
        <div className="container">
          <div className="testimonial__quote-wrap" style={{padding: '0.5em', maxWidth: '40em', width: '100%', margin:"0 auto"}}>
            <blockquote className="testimonial__quote" style={{backgroundColor: '#e4e5d1', padding: '1em'}}>"I am happy to give an enthusiastic recommendation for Alex’s work. His knowledge, experience, and attitude make him a valuable contributor through all phases of a development project, from planning and strategy through execution. On top of his strong work, his communication skills help keep the project moving smoothly and everyone up-to-date."</blockquote>
            <p style={{textAlign:'right'}}>
              <cite className="testimonial__cite" >Jon Reigelman, Creative Director at National Center for Families Learning</cite>
            </p>
          </div>
        </div>
      </section>
    </Layout>
    )
  }
}

export default IndexPage

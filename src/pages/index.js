import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaWordpressSimple, FaExternalLinkAlt, FaGithub, FaEnvelope, FaArrowCircleRight } from 'react-icons/fa'
import YouTube  from 'react-youtube'

import Layout from '../components/layout'
import '../components/index.css'
import About from '../components/about'
import SkillsList from '../components/skillslist'

//* TODO: move all the rotator content to graphql
//* TODO: move the skills lists to graphql

const rotatorContent = [
  {
      "headline": "WordPress Developer",
      "subheadline": "Trusted by 31% of the web for a reason.",
      "content": [
          "My favorite thing about WordPress is it's built to solve actual problems we all face on the web. It's been my go-to software since 2010. I build custom WordPress plugins, themes, and Headless WordPress applications to make it work just right for your needs.", 
          "From 2014 to 2017, I worked at Automattic helping thousands of people use WordPress for their business, their project, or their blog. I can help you too.",
          "Between my code and your content, we can make some magic happen."
      ]
  },
  {
      "headline": "Front-End Developer",
      "subheadline": "It just works. But it needs to work and juggle chainsaws at the same time.",
      "content": [
          "After Automattic, I became a front-end developer at a local web agency. Pretty quickly I learned that every project needs a great deal of polish.",
          "Sass, Gulp, Webpack, React, Gatsby... the front-end space advances everyday. But it's what I breath and I keep getting better. All in the name of making your stuff the coolest stuff whenever possible."
      ]
  },
  {
      "headline": "Full-Stack Developer",
      "subheadline": "Server-side, client-side... I look on the bright side.",
      "content": [
          "In the end, making new stuff requires knowing a little bit of everything. Many developers strive for depth in a speciality to make the most money at Google. I seek a pragmatic breadth of understanding so that you and I can make the next Google.", 
          "When my favorite tools don't fit the project, I'm not scared to abandon them in favor of something more appropriate. The best problems have nothing to do with what I know, and everything about what I can figure out.",
          "Whatever you need created, I want to make it the best way possible."
      ]
  },
];

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
      <About rotatorContent={rotatorContent} />
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

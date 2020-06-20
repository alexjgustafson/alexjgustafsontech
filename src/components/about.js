import React, { Component } from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Rotator from '../components/rotator'

class About extends Component {

    constructor(props){
        super(props)
        this.state = { activeIndex: 0 }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState((state) => {
            return {activeIndex: state.activeIndex + 1};
        });
    }

    render() {
        return(
            <StaticQuery query={graphql`
                query{
                    allMarkdownRemark(sort: {fields: fileAbsolutePath}){
                        edges{
                            node {
                                html
                                frontmatter {
                                    headline
                                    subheadline
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const rotatorTotal = data.allMarkdownRemark.edges.length
                let currentIndex = (rotatorTotal + this.state.activeIndex) % rotatorTotal
                return(
                    <section className="about container" style={{padding:'3em 0',textAlign:'center'}}>
                        <div className="about__rotator-wrapper">
                            {data.allMarkdownRemark.edges.map( ({node}, index) => (
                                <Rotator 
                                    item={ {
                                        headline: node.frontmatter.headline, 
                                        subheadline: node.frontmatter.subheadline,
                                        content: node.html,
                                    } } 
                                    key={ index } 
                                    isActive={ currentIndex === index ? 'active' : 'inactive'}
                                />
                            ))}                  
                        </div>
                        <button onClick={this.handleClick} className='about__button'>What Else?</button> 
                    </section>
                )
            }}
            />
        )
    }
}

export default About
 


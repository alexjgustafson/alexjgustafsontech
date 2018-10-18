import React, { Component } from 'react'
import Rotator from '../components/rotator'

class About extends Component {

    constructor(props){
        super(props)
        this.state = { activeIndex: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let { rotatorContent } = this.props;
        let { activeIndex } = this.state;

        if( activeIndex >= (rotatorContent.length - 1) ){
            this.setState({ activeIndex: 0 })
        }else{
            this.setState({ activeIndex: activeIndex + 1 }) 
        }
    }

    render() {
        let { rotatorContent } = this.props;
        let { activeIndex } = this.state;

        return(
            <section className="about container" style={{padding:'3em 0',textAlign:'center'}}>
                <div className="about__rotator-wrapper">
                    { rotatorContent.map( ( item, index ) => (
                        <Rotator 
                            item={ item } 
                            key={ index } 
                            isActive={ activeIndex === index ? 'active' : 'inactive'}
                        />
                    ) ) }                  
                </div>
                <button onClick={this.handleClick} className='about__button'>What Else?</button> 
            </section>
        )
    }
}

export default About

 

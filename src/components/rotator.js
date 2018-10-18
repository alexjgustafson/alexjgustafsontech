import React from 'react'

const Rotator = ( { isActive, item:{ headline, subheadline, content } } ) => (
    <div className={`about__rotator ${isActive}`}>
        <h2>{ headline }</h2>
        <div className="about__content">
            <h3>{ subheadline }</h3>
            { content.map( (paragraph, index) => <p key={index}>{ paragraph }</p> ) }
        </div>  
    </div>
)

export default Rotator

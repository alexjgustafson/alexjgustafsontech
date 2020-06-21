import React from 'react'

const Testimonial = ( { quote, cite } ) => (
    <div className="testimonial__quote-wrap" style={{padding: '0.5em', maxWidth: '40em', width: '100%', margin:"0 auto"}}>
        <blockquote className="testimonial__quote" style={{backgroundColor: '#e4e5d1', padding: '1em'}}>{quote}</blockquote>
        <p style={{lineHeight:0.95, textAlign:'right'}}>
            <cite className="testimonial__cite" >{cite}</cite>
        </p>
    </div>
)

export default Testimonial


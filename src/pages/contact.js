import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout useH1={false}>
    <div className="container" style={{minHeight: 'calc( 100vh - 8rem )', maxWidth:'60rem'}}>
      <h1 style={{marginTop:'2em'}}>Contact Alex</h1>
      <p>Let's work together!</p>
      <p>Fill out the form below and I'll get in touch next time I process my email. Thats most business days.</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Topic:  <select name="topic">
              <option selected> Choose a Topic</option>
              <option>Send Me A Portfolio</option>
              <option>Send Me a Project Quote</option>
              <option>Just Getting In Touch</option>
            </select> 
          </label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact

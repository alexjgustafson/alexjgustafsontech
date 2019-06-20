import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout useH1={false}>
    <div className="container" style={{minHeight: 'calc( 100vh - 8rem )', maxWidth:'60rem'}}>
      <h1 style={{marginTop:'2em'}}>Contact Alex</h1>
      <p>Howdy!</p>
      <p>I'm not looking for new clients and do not reply to all messages. However, if you have something interesting to discuss you can reach me using this form.</p>      
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
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

import React from 'react'

const year = new Date().getFullYear();

const Footer = () => (
    <footer className="site-footer" style={{backgroundColor:'#314963', color:'#fff', padding:'1.4em 0'}}>
        <div className="container">
            <p className="site-footer__colophon" style={{marginBottom:'0'}}>©{year} Alex J. Gustafson Tech.</p>
        </div>
    </footer>
)

export default Footer

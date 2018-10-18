import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

import Footer from './footer'

const Layout = ({ children, useH1 }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Alex Gustafson is a WordPress Developer in Louisville, Kentucky specializing in Headless WordPress with React as well as custom theme, plugin, and Gutenberg block development.' },
            { name: 'keywords', content: 'WordPress Developer, Front-end Developer, Full-stack Developer' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} useH1={useH1}/>
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

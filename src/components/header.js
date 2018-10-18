import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, useH1 }) => (
  <div
    style={{
      background: '#314963',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        width: '85%',
      }}
    >
      { useH1 ? 
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>:
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      }
    </div>
  </div>
)

export default Header

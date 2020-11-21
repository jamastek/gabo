import React from "react"
import SEO from "../../components/seo"

const Layout = ({children}) => {
  return (
    <>
      <SEO/>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout
import React from "react"
import SEO from "@/components/seo"
import { LayoutType } from "@/types"

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="container">{children}</div>
    </>
  )
}

export default Layout

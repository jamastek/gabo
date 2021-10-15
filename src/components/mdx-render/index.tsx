import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

type Props = {
  data: any
}

const MdxRender: React.FC<Props> = ({ data }) => {
  const shortcodes = {
    Link,
  }

  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer frontmatter={data.frontmatter}>{data.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxRender

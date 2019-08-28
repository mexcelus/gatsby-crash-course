import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from "../components/layout"

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
        <div className="blog-post">
            <Link to="/blog">Go back</Link>
            <hr />
            <h1>{post.frontmatter.tittle}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`
